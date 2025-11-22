const products = [
  { id: 1, name: "Ajice Vanilla", desc: "กลิ่นวานิลลาหอมละมุน", price: "45฿" },
  { id: 2, name: "Ajice Matcha", desc: "ชาเขียวเข้มข้นจากเกียวโต", price: "55฿" },
  { id: 3, name: "Ajice Strawberry", desc: "รสสตรอว์เบอร์รีหวานหอม", price: "50฿" },
];

export default function ProductsPage() {
  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">สินค้า Ajice</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl p-4 shadow-sm bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-medium">{item.name}</h3>
            <p className="text-gray-500">{item.desc}</p>
            <span className="text-blue-600 font-semibold">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
