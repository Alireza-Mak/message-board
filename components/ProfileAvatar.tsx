type ProfileAvatarProps = {
    username: string;
};

const ProfileAvatar = ({ username }: ProfileAvatarProps) => {
    const initials = username.slice(0, 2).toUpperCase();

    return (
        <div className="flex items-center gap-2 rounded-full bg-neutral-900 border border-purple-700 px-3 py-1.5 shadow-lg shadow-purple-900/30">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xs">{initials}</span>
            </div>
            <span className="text-purple-300 font-semibold text-sm tracking-wide">{username}</span>
        </div>
    );
};

export default ProfileAvatar;
