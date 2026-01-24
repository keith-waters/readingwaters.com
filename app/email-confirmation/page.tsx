export default function EmailConfirmation() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:items-center md:justify-center">
      <div className="max-w-md space-y-4 pt-6">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl">
          You're all set!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Thanks for signing up to the email list.
        </p>
      </div>
    </div>
  )
}
