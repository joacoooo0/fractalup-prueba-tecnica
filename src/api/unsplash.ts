const apiurl = import.meta.env.UNSPLASH_API_URL;
const accesskey = import.meta.env.UNSPLASH_ACCESS_KEY;

export async function getCountryImage(
  countryName: string
): Promise<string | null> {
  try {
    const response = await fetch(
      `${apiurl}?query=${countryName}&client_id=${accesskey}&per_page=1`
    );
    const data = await response.json();
    const imageUrl = data.results[0]?.urls?.regular;
    return imageUrl || null;
  } catch (error) {
    console.error("Error al obtener la imagen de Unsplash:", error);
    return "https://pds.exblog.jp/pds/1/201712/21/39/f0323239_18023139.png";
  }
}
