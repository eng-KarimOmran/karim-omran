import data from "@/data.json";
interface Profile {
  name: string;
  experience: string;
  country: string;
  state: string;
  phone: string;
  email: string;
  education: string;
  languages: string[];
}
export default function About() {
  const profile: Profile = data.resumeSection.about.personalInfo;

  const profileEntries = Object.entries(profile);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-lg">
      {profileEntries.map(([key, value]) => (
        <li key={key} className="bg-muted p-5 rounded-2xl">
          <span className="text-muted-foreground font-semibold capitalize">
            {key.replace("_", " ")}:{" "}
          </span>
          {Array.isArray(value) ? value.join(", ") : value}
        </li>
      ))}
    </ul>
  );
}
