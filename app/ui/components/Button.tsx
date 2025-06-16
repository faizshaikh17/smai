import Link from 'next/link';

interface CTAButtonProps {
    label: string;
    label2: string;
    suplabel: string;
    href: string;
    target?: '_blank' | '_self';
    className?: string;
}

const Button: React.FC<CTAButtonProps> = ({
    label,
    label2,
    suplabel,
    href,
    target = '_self',
    className = '',
}) => {
    return (
        <Link href={href} target={target} className={`inline-block ${className}`}>
            <button
                type="submit"
                className="p-[2px] w-full max-w-xs md:max-w-none rounded-[0.9rem] bg-gradient-to-r from-blue-500 via-white to-gray-400"
            >
                <div className="p-1 w-full flex items-center justify-center rounded-[0.85rem] bg-[#1C1F24] shadow-[inset_0_4px_6px_#242629,inset_0_1px_2px_rgba(255,255,255,0.04),inset_0_3px_2px_rgba(209,213,219,0.1),0_3px_10px_rgba(0,0,0,0.25),0_1px_1px_rgba(255,255,255,0.06)]">
                    <span className={`${className} font-medium text-base text-[var(--white)] px-4 py-2 bg-[#21252A] rounded-[0.7rem] flex items-center justify-center gap-4 shadow-[0_2px_6px_rgba(0,0,0,0.2),0_-1px_2px_rgba(209,213,219,0.05),inset_0_1px_0_rgba(255,255,255,0.01),0_-2px_3px_rgba(0,0,0,0.12)] transition-colors duration-200 hover:bg-[#2A2E36] w-full`}>
                        <p>
                            {label}
                            <sup className="ml-1 text-[0.5rem]">{suplabel}</sup>
                        </p>
                        <p className='text-neutral-700 text-3xl'>{label2 || ''}</p>
                    </span>
                </div>
            </button>
        </Link>
    );
};

export default Button;
