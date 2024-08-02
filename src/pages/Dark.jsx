import React from 'react';

const OrphansTable = () => {
  const data = [
    { name: 'براعم الصليخ كبار', address: 'الصليخ', orphansCount: 30 },
    { name: 'براعم الصليخ صغار', address: 'الصليخ', orphansCount: 30 },
    { name: 'طفولة الصالحيه', address: 'الصالحيه', orphansCount: 38 },
    { name: 'زهور الاعظمية', address: 'الاعظميه', orphansCount: 20 },
    { name: 'زهور العلوية', address: 'قرب ساحة الواثق', orphansCount: 34 },
    { name: 'براعم نينوى', address: 'نينوى حي الزهور', orphansCount: 32 },
    { name: ' زهور نينوى طفوله ', address: 'نينوى', orphansCount: 30 },
    { name: ' زهور بابل', address: 'بابل حي نادر', orphansCount: 15 },
    { name: 'براعم كربلاء المقدسة', address: 'كربلاء المقدسه', orphansCount: 2 },
    { name: 'براعم بابل ', address: 'حي نادر  ', orphansCount: 13 },
    { name: ' براعم النجف الاشرف', address: 'حي العداله  ', orphansCount: 20 },
    
    
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-300 mt-14 container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center bg-blue-200 p-2 rounded-md">
      List of registered houses on the site
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-200">
              <th className="py-2 px-4 border-b-2 border-gray-300">الاسم</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">العنوان</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">عدد الأيتام</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b border-gray-300">{item.name}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.address}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.orphansCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrphansTable;