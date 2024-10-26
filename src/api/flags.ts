const REST_COUNTRIES_API = "https://restcountries.com/v3.1/name/";

export async function getCountryFlag(
  countryName: string
): Promise<string | null> {
  try {
    const response = await fetch(
      `${"https://restcountries.com/v3.1/name/"}${countryName}`
    );
    if (!response.ok) {
      throw new Error("Error al obtener la bandera del país");
    }
    const data = await response.json();
    const flagUrl = data[0]?.flags?.png;
    return flagUrl || null;
  } catch (error) {
    console.error("Error al obtener la bandera:", error);
    return "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"; //hay algunas imagenes q no aparecen x el limite de la api de unsplash, por eso defini una img para que reemplace las que no salen
  }
}
