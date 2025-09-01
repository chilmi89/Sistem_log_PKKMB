import MasterLayout from '@/Layouts/MasterLayout';
import React from 'react';
import ReactECharts from 'echarts-for-react';

const Grafik = () => {
  // Dummy data mahasiswa
  const mahasiswa = [
    { nama: 'Andi', status: 'Hadir' },
    { nama: 'Budi', status: 'Alpa' },
    { nama: 'Citra', status: 'Hadir' },
    { nama: 'Dewi', status: 'Alpa' },
    { nama: 'Eka', status: 'Hadir' },
    { nama: 'Fajar', status: 'Alpa' },
    { nama: 'Gita', status: 'Hadir' },
  ];

  // Hitung jumlah hadir dan alpa
  const hadir = mahasiswa.filter(m => m.status === 'Hadir').length;
  const alpa = mahasiswa.filter(m => m.status === 'Alpa').length;

  const option = {
    title: {
      text: 'Grafik Absensi Mahasiswa (Pie Chart 3D)',
      left: 'center',
      top: 20,
      textStyle: { fontSize: 20 },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} mahasiswa ({d}%)',
    },
    series: [
      {
        name: 'Absensi',
        type: 'pie',
        radius: ['40%', '70%'],
        roseType: 'radius', // efek 3D-like
        label: { show: true, fontSize: 14 },
        labelLine: { smooth: true, length: 15, length2: 20 },
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2,
        },
        emphasis: {
          label: { fontSize: 16, fontWeight: 'bold' },
        },
        data: [
          { value: hadir, name: 'Hadir', itemStyle: { color: 'rgb(0,200,0)' } },
          { value: alpa, name: 'Alpa', itemStyle: { color: 'rgb(200,0,0)' } },
        ],
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: (idx) => idx * 300,
      },
    ],
  };

  return (
    <MasterLayout>
      <div className="p-4 bg-white rounded shadow">
        <h1 className="text-xl font-semibold mb-4">Grafik Absensi Mahasiswa</h1>
        <ReactECharts option={option} style={{ height: 450 }} />
      </div>
    </MasterLayout>
  );
};

export default Grafik;

