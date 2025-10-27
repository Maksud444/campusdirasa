export default function ExampleForm() {
  return (
    <div className="space-y-4">
      <input 
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500" 
        placeholder="أدخل البيانات"
      />
      <button className="w-full py-3 bg-emerald-500 text-white rounded-lg text-sm sm:text-base hover:bg-emerald-600">
        إرسال
      </button>
    </div>
  );
}