import { Redirect } from "expo-router";

export default function Index() {
  return (

    // <Redirect href="/(stack)/home" />
    <Redirect href="/drawer" />

    // <View
    //   className="mt-10 bg-red-50"
    // >
    //   <Text className="text-3xl font-bold color-blue-400">Hello</Text>
    //   <Link href="/products">Producto</Link>
    // </View>
  );
}
