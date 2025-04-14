"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { submitGameRegistration } from "@/app/actions"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  gamertag: z.string().min(3, {
    message: "Gamertag must be at least 3 characters.",
  }),
  teamName: z.string().min(3, {
    message: "Team name must be at least 3 characters.",
  }),
  paymentProof: z.instanceof(FileList).refine((files) => files.length > 0, {
    message: "Please upload a payment proof screenshot.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export function GameRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState("")

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      gamertag: "",
      teamName: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)

    try {
      // Create FormData object to handle file upload
      const formData = new FormData()
      formData.append("name", values.name)
      formData.append("email", values.email)
      formData.append("phone", values.phone)
      formData.append("gamertag", values.gamertag)
      formData.append("teamName", values.teamName)

      if (values.paymentProof[0]) {
        formData.append("paymentProof", values.paymentProof[0])
      }

      // Submit the form data to the server action
      const result = await submitGameRegistration(formData)

      if (result.success) {
        toast({
          title: "Registration Successful!",
          description: result.message,
        })
        form.reset()
        setFileName("")
      } else {
        toast({
          title: "Registration Failed",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    } else {
      setFileName("")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gamertag"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gamertag</FormLabel>
              <FormControl>
                <Input placeholder="Your CODM username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="teamName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Name</FormLabel>
              <FormControl>
                <Input placeholder="Your team name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentProof"
          render={({ field: { ref, ...field } }) => (
            <FormItem>
              <FormLabel>Payment Proof</FormLabel>
              <FormDescription>
                Please upload a screenshot of your payment to 8104680342 (OPAY) - Tiffany Eribenne
              </FormDescription>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="paymentProof"
                    onChange={(e) => {
                      field.onChange(e.target.files)
                      handleFileChange(e)
                    }}
                    ref={ref}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("paymentProof")?.click()}
                    className="w-full"
                  >
                    Upload Screenshot
                  </Button>
                </div>
              </FormControl>
              {fileName && <p className="text-xs text-muted-foreground">Selected: {fileName}</p>}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </div>
          ) : (
            "Register for Tournament"
          )}
        </Button>
      </form>
    </Form>
  )
}
