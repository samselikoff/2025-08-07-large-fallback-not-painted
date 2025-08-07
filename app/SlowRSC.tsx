export async function SlowRSC() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <p>Hi</p>;
}
