/**
 * Renders a JSON-LD <script> for structured data. Keep this in the body — it is
 * valid there and Next.js/React handle it fine. We escape `<` so a stray "<" in
 * user/content text cannot break out of the script context.
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
