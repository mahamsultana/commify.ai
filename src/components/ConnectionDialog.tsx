import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoSwapHorizontalSharp } from "react-icons/io5";
import { connectionIntegrationData } from "@/data/connectiondata";
import Commify from "@/icons/commify";
import { SiShopify } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

interface ConnectionDialogProps {
  open: boolean;
  onClose: () => void;
  selectedIntegration: string | null;
}

export function ConnectionDialog({
  open,
  onClose,
  selectedIntegration,
}: ConnectionDialogProps) {
  const selectedIntegrationData = connectionIntegrationData.find(
    (connection) => connection.title === selectedIntegration
  );

  if (!selectedIntegrationData) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-b from-[#F8FBFF] to-[#d5dbe4]  text-[#000000] rounded-lg p-6 shadow-lg">
        <DialogHeader>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {selectedIntegrationData.icon === "whatsapp" && (
             <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-[#EAF3FF] rounded-full">
              <FaWhatsappSquare className="h-full w-full text-[#0C4FE1]" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full">
             <IoSwapHorizontalSharp />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-[#EAF3FF] rounded-full">
              <Commify/>
            </div>
             </div>
            )}
            {selectedIntegrationData.icon === "shopify" && (
               <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-[#EAF3FF] rounded-full">
              <SiShopify  className="h-full w-full text-[#0C4FE1]" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full">
             <IoSwapHorizontalSharp />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-[#EAF3FF] rounded-full">
              <Commify/>
            </div>
             </div>
            )}
            {selectedIntegrationData.icon === "email" && (
               <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-[#EAF3FF] rounded-full">
              <MdOutlineEmail  className="h-full w-full text-[#0C4FE1]" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full">
             <IoSwapHorizontalSharp />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-[#EAF3FF] rounded-full">
              <Commify/>
            </div>
             </div>
            )}
          </div>
          <DialogTitle className="text-center text-2xl font-semibold text-[#333333]">
            Connect Your {selectedIntegrationData.title}
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-[#666666]">
            Enter your details to link your {selectedIntegrationData.title} account with the platform.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-2">
          {selectedIntegrationData.fields.map((field) => (
            <div className="flex flex-col gap-4" key={field.id}>
              <Label htmlFor={field.id} className="text-sm text-[#333333]">
                {field.label}
              </Label>
              <Input
                id={field.id}
                className="col-span-3 border-[#CCCCCC] text-sm placeholder-[#999999] rounded-md"
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>

        <DialogFooter className="flex mt-6 sm:justify-end flex-row justify-between gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full max-w-[140px] text-sm text-[#333333] bg-gray-200 rounded-full border-[#CCCCCC]"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant={'outline'}
            className="w-full max-w-[140px] text-sm text-white rounded-full bg-[#0066FF] hover:bg-[#0055CC]"
            onClick={() => alert(`${selectedIntegration} connected!`)}
          >
            Connect
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
