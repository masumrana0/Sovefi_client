import {
  Avatar as ShadcnAvatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { User } from "lucide-react";

interface AvatarProps {
  /** The URL of the avatar image */
  url?: string;
  /** The alt text for the avatar image */
  alt?: string;
  /** The size of the avatar in pixels */
  size?: number;
}

export default function Avatar({
  url,
  alt = "User avatar",
  size = 40,
}: AvatarProps) {
  return (
    <ShadcnAvatar className="relative" style={{ width: size, height: size }}>
      {url ? (
        <AvatarImage src={url} alt={alt} className="object-cover" />
      ) : (
        <AvatarFallback className="bg-muted">
          <User
            className="text-muted-foreground"
            style={{ width: size * 0.6, height: size * 0.6 }}
          />
        </AvatarFallback>
      )}
    </ShadcnAvatar>
  );
}
