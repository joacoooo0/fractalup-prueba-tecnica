const UNSPLASH_API_URL = "https://api.unsplash.com/search/photos";
const UNSPLASH_ACCESS_KEY = "WiOEX_WtAZuTjJcFSj_49F2Datmj3Rgwx9gciFnrsIA";

export async function getCountryImage(
  countryName: string
): Promise<string | null> {
  try {
    const response = await fetch(
      `${"https://api.unsplash.com/search/photos"}?query=${countryName}&client_id=${"WiOEX_WtAZuTjJcFSj_49F2Datmj3Rgwx9gciFnrsIA"}&per_page=1`
    );
    const data = await response.json();
    const imageUrl = data.results[0]?.urls?.regular;
    return imageUrl || null;
  } catch (error) {
    console.error("Error al obtener la imagen de Unsplash:", error);
    return "https://pds.exblog.jp/pds/1/201712/21/39/f0323239_18023139.png";
  }
}
