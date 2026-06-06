interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <>
      <div className="flex flex-col mt-5 items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="font-bold mb-2 whitespace-nowrap text-[clamp(1rem,4vw,1.875rem)]">
            {title}
            <span className="cursor inline-block text-[1em] leading-none align-middle">█</span>
          </h1>
        </div>
      </div>
      <hr className="my-6" />
    </>
  )
}
