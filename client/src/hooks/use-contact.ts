import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function useSubmitContact() {
  const { toast } = useToast();
  
  return {
    isPending: false,
    mutate: (data: ContactFormData, options?: { onSuccess?: () => void }) => {
      // For static site, just show a success message
      console.log("Contact form submitted:", data);
      toast({
        title: "Message Received",
        description: "Thank you for contacting Neurobotix. We will be in touch shortly.",
      });
      options?.onSuccess?.();
    }
  };
}
