export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">ติดต่อเรา</h2>
      <form className="space-y-4">
        <input type="text" placeholder="ชื่อของคุณ" className="w-full border p-2 rounded-lg" />
        <input type="email" placeholder="อีเมล" className="w-full border p-2 rounded-lg" />
        <textarea placeholder="ข้อความของคุณ" className="w-full border p-2 rounded-lg h-28" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          ส่งข้อความ
        </button>
      </form>
    </section>
  );
}
