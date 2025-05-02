
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CommunityMemberProps {
  name: string;
  role: string;
  avatarUrl: string;
  work: string;
}

const communityMembers = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "UI Designer",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    work: "https://images.unsplash.com/photo-1481487196290-c152efe083f5"
  },
  {
    id: 2,
    name: "Jamie Chen",
    role: "Product Designer",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    work: "https://images.unsplash.com/photo-1545235617-9465d2a55698"
  },
  {
    id: 3,
    name: "Sam Taylor",
    role: "UX Researcher",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    work: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec"
  }
];

const CommunityMember = ({ name, role, avatarUrl, work }: CommunityMemberProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 overflow-hidden rounded-lg">
        <img src={work} alt={`${name}'s work`} className="h-48 w-full object-cover transition-transform hover:scale-105 duration-500" />
      </div>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-sm font-medium">{name}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

const CommunitySection = () => {
  return (
    <section id="community" className="py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Design Community</h2>
            <p className="text-muted-foreground text-lg">
              Connect with talented designers from around the world showcasing their best work.
            </p>
          </div>
          <Button variant="outline" className="gap-2 group">
            View all members
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityMembers.map((member) => (
            <CommunityMember 
              key={member.id}
              name={member.name}
              role={member.role}
              avatarUrl={member.avatarUrl}
              work={member.work}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
