export default function BlogPage() {
  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header>
        {/* Not sure if items-end here is useful */}
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* TAG */}
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>

            {/* Title */}
            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              Tips and strategies to boost your business
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
}
