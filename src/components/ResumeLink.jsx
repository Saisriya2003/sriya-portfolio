import { profile } from "../data";

export default function ResumeLink({ className = "btn btn--ghost", children = "Download resume", ...props }) {
  return (
    <a className={className} href={profile.resume} download={profile.resumeFile} {...props}>
      {children}
    </a>
  );
}
