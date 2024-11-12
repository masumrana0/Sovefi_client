import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  MapPin,
  Link as LinkIcon,
  Mail,
  Twitter,
  Facebook,
} from "lucide-react";
import ProfileEditModal from "@/components/pageComponets/profileEditModal";

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Card>
        <CardHeader className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:items-center sm:space-x-5">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage
                src="https://private-avatars.githubusercontent.com/u/83531333?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzE0NDA1MjAsIm5iZiI6MTczMTQzOTMyMCwicGF0aCI6Ii91LzgzNTMxMzMzIn0.hDEdcdKh9znuZK8acJEOkk7ehByRJqoMFSaE9sh_FHQ&v=4?height=96&width=96"
                alt="Profile picture"
              />
              <AvatarFallback>KH</AvatarFallback>
            </Avatar>
            <div className="mt-4 sm:mt-0 text-center sm:text-left">
              <CardTitle className="text-3xl font-bold">
                MD.Kamrul Hasan
              </CardTitle>
              <CardDescription className="text-xl">
                New York USA
              </CardDescription>
              <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                <Badge variant="secondary" className="text-xs">
                  Borrowers
                </Badge>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 flex justify-center">
            <ProfileEditModal />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-muted-foreground">
                Passionate software engineer with 5+ years of experience in
                building scalable web applications. Loves to contribute to
                open-source projects and mentor junior developers.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-2" />
                  San Francisco, CA
                </div>
                <div className="flex items-center text-muted-foreground">
                  <LinkIcon className="w-5 h-5 mr-2" />
                  <a href="https://janedoe.com" className="hover:underline">
                    janedoe.com
                  </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Joined March 2018
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Loans Provided</span>
                  <span className="font-semibold">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Total Investment
                  </span>
                  <span className="font-semibold">1.2k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Following</span>
                  <span className="font-semibold">567</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon">
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
