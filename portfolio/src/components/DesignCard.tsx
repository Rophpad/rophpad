import Image from "next/image";
import Link from "next/link";

export const DesignCard = ({ 
  link, 
  image, 
  name, 
  description 
}: { 
  link: string; 
  image: string; 
  name: string; 
  description: string; 
}) => {
  return (
    <Link 
      href={link} 
      target="_blank" 
      className="group block p-4 rounded-xl border border-white/10 hover:border-white/20 hover:shadow-sm transition-all duration-200"
    >
      <div className="flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <Image
            src={`/${image}`}
            alt={name}
            width={48}
            height={48}
            className="size-12  object-cover rounded-lg"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate group-hover:text-gray-700 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-1">
            {description}
          </p>
        </div>
        
        <div className="flex-shrink-0">
          <svg 
            className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};