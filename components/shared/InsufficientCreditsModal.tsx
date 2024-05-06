"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { useProModal } from "@/hooks/use-pro-modal";

export const InsufficientCreditsModal = () => {
  const router = useRouter();
  const proModal = useProModal();

  return (
    <>
        {proModal.onOpen()}
    </>
  );
};