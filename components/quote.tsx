export const Quote = ({ quote }: { quote: string }) => {
  return (
    <p className="flex items-start whitespace-pre-wrap text-balance text-xl text-content-lightest">
      <span className="text-[48px]">“</span> {quote}
    </p>
  );
};
