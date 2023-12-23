export const InlineLink = ({href, text}: {href: string, text: string}) => {
    return  <a href={href} className="text-blue-500 hover:text-blue-700 hover:underline mx-2">{text}</a> 
}