export const InlineLink = ({href, children}: {href: string, children: React.ReactNode}) => {
    return  <a href={href} className="text-blue-500 hover:text-blue-700 hover:underline mx-2">{children}</a> 
}