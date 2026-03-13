import CustomLink from '@/components/Link'

export default function TlgCodes() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          The Lines Game code
        </h1>
      </div>
      <div className="prose pt-6 dark:prose-invert">
        <p>Enter LINES202603 into the redeem code section</p>
        <p>That will get you 500 lines to spend on upgrades</p>
        <p>Thanks for playing and have fun!</p>
        <p>
          Confused about how to enter a code? Read through{' '}
          <CustomLink href="/blog/how-to-enter-a-code-in-the-lines-game">this</CustomLink>
        </p>
      </div>
    </div>
  )
}
