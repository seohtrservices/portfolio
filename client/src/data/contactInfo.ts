import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageSquare,
} from "lucide-react";

export const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    color: "text-red-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "seohtr@gmail.com",
    link: "mailto:seohtr@gmail.com",
    color: "text-blue-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 320 0141848",
    link: "tel:+923200141848",
    color: "text-green-400",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "Available",
    link: "https://wa.me/923200141848",
    color: "text-cyan-400",
  },
];
