 import { FaSquareWhatsapp } from "react-icons/fa6";
 import { SiShopify } from "react-icons/si";
 import { MdEmail } from "react-icons/md";
 
 
 export const integrations = [
    {
      title: "Shopify Integration",
      description: "Sync your Shopify store to automate order tracking, etc directly from your dashboard.",
      name: 'Shopify',
      image:SiShopify 
    },
    {
      title: "Email Integration",
      description: "Connect your email system to automate customer communication within the platform.",
      name: 'Email',
      image:MdEmail 
    },
    {
      title: "WhatsApp Integration",
      description: "Enable WhatsApp integration for real-time communication, customer queries on the go.",
      name: 'WhatsApp',
      image:FaSquareWhatsapp
    }
  ];