interface AuthorCardProps {
  name: string;
  bio: string;
  role: string;
}

export default function AuthorCard({ name, bio, role }: AuthorCardProps) {
  return (
    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 my-8">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <span className="text-3xl">👤</span>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900">{name}</h4>
          <p className="text-primary font-semibold text-sm">{role}</p>
          <p className="text-gray-600 text-sm mt-2">{bio}</p>
        </div>
      </div>
    </div>
  );
}
