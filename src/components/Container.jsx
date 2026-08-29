export default function Container({ as: Tag = "div", className = "", children }) {
  return <Tag className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10 ${className}`}>{children}</Tag>;
}
