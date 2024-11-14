import EmailVerification from "@/components/pageComponets/emailVerification";
import React from "react";

const EmailVerificationPage: React.FC = ({ params }: any) => {
  const token: string = params.token;
  return (
    <div>
      <EmailVerification token={token} />
    </div>
  );
};

export default EmailVerificationPage;
