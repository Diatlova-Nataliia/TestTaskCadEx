export async function POST(req: Request) {
  const formData = await req.formData();
  console.log(formData);
  const name = formData.get("name");
  const message = `Thank you for your interest, ${name}`;
  console.log(formData);
  return Response.json({ message });
}
