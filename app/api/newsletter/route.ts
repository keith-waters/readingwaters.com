export async function POST(req: Request) {
  const { email } = await req.json()
  const data = {
    email,
    status: 'active',
    groups: ['110017345201636525'],
  }

  try {
    const mailerliteRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${process.env.MAILER_LITE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })
    const mlRes = await mailerliteRes.json()
    if (mlRes.errors) {
      return Response.json({ error: 'There was an error subscribing' }, { status: 400 })
    }

    return Response.json({ message: 'success' })
  } catch (err) {
    return Response.json({ error: 'There was an error subscribing' }, { status: 500 })
  }
}
