"use client";
import { useScroll, animated } from "@react-spring/web";

const Words = [
  "Bil, besok ada grand opening di red white, mau gabung ga?",
  "Sama siapa aja?",
  "sama adek ku",
  `Owhh, besok masih gak tau fan:")`,
  "Soalnya aku lagi sakit trs besok aku ke kampus immuki nya",
  "ok, kalo gitu besok kabari aku semisal kamu bisa gabung ke redwhite, ntr aku jemput.",
  "Oke fan makasi udah nawarin yah",
  "Iya makasii",
  "Fandy, maaf ya aku gak bisa sekarang soalnya mau ada janji sama temen dari lama gak enak mau batalin🥲",
  "iya gapapa, lain waktu aja. makasih lo udh ngabarin.",
  "uas-nya gimana?, ada yang berat kah?.",
  "Pasti wkwkwk",
  "Tidak ada uas yg gampang💁🏻‍♀️",
  "yg mana paling berat?,",
  "Database sih",
  "itu disuruh apa?, aku belum ada pengumuman uas db",
  "Bikin database trs coba query gitu sih",
  "Mau liat soalnya?",
  "boleh, lemme see",
  "chatgpt mah bisa ini",
  "Gimana cara pake tu ya",
  "login dulu coba, kalo udh bilang.",
  "https://chat.openai.com/",
  "presentasi ga si basis itu?",
  "Nggak",
  "Wait yaa lagi ada dosen",
  "nanti aja ya, ak lg dluar.",
  "Oke",
  "deadline kapan itu?",
  "Ad laptop buat ngerjain?, aku kasi keyword-nya biar gampang pake chatgpt",
  "Ada kok",
  "Keyword apa ni",
  "Buat nemuin jawaban -_-",
  "Owhh iya yaa",
  "nomor 2 itu kamu copy soalnya, paste ke chatgpt.",
  "oke",
  "nomor 5 itu bingung aku, buat databasenya dari awal dengan data yg seperti gambar atau buat query-nya aja",
  "coba tanya dosennya, `pak ini buat query aja kah? atau buat database dari awal terus masukin semua data kaya digmbar?`",
  "Susah nok dihubungi dosenya",
  "Coba deh aku wa dulu",
  "siapa dosennya?",
  "minta nomor w.a-nya",
  "Pak komang",
  "Ngapain wkwkwk",
  "kalo ga bisa dihubungi, buat perintah-ya aja.",
  "😁",
  "Ini masih aku tanya ke temen",
  `Nomor 5 SQL QUERY

  - Insert data mahasiswa
  
  INSERT INTO mahasiswa (Nim, Nama, Alamat, Tempat_Lahir, Tanggal_Lahir, Jenis_Kelamin)
  VALUES (140004, 'Desi Ratna', 'Jl Bojong sari no 50 Lombok', 'Lombok', '1995-06-04', 'P');
  
  
  - filter who has Jenis_kelamin = "L"
  
  SELECT *
  FROM mahasiswa
  WHERE Jenis_Kelamin = 'L';
  
  
  - update who has Nim "140002"
  
  UPDATE mahasiswa
  SET Nama = 'Agus Salsae', Tempat_Lahir = 'Yogyakarta'
  WHERE Nim = 140002;
  
  
  - delete user that has name "Ani Sumarni"
  
  DELETE FROM mahasiswa
  WHERE Nama = 'Ani Sumarni';`,
  "nomor 6 itu mudah, pasti bisa.",
  "widiii makasi loohh",
  "iyaa ini lagi usaha kok wkwwk",
  "sebenernya ada database yang lebih mudah lagi ketimbang ini, tapi nanti aja aku kasih tau.",
  "dicoba dulu :D",
  "siap siap",
  "fandy, itu nomor 3 buat skema kah?",
  "yes you're right",
  "okelah",
  "soal-nya masukin chatgpt.",
  "udah sih tapi jadi bingung wkwkwk",
  "so, diskusiin sama temenmu biar saling lengkap attribute-nya.",
  "sek",
  "iya begitu",
  "buat database kan?",
  "abistu ubah ke skema",
  "dosennya bener bener sulit di contact kah?",
  "iyaa blm dijawabb",
  "maklum kaprodi sibuks",
  "i dunno, di soalnya `rancangan`.",
  "buatlah rancangan",
  "wait baru dibales",
  "betul, soal dari no. 5 itu membutuhkan semangat teman2 untuk membuat database",
  "iya wkwkwk",
  "waduh -_-",
  "no.3 gak buat database katanya",
  "dari no.5 dan seterusnya",
  "dari no 5 dan seterusnya buat db?",
  "iyap",
  `no 5

  soalnya ga lengkap, tapi yasudah lah, itu gampang kok
  - buat database
  - buat table mahasiswa di dlm database ^
  - masukin data anak anak itu, samain kaya di gambar
  - masukin anak baru tuh Desi Ratna`,
  "okelahh",
  "nangis dulu ga sih :D",
  "nyicil aja deh",
  "dari kemarennn😭😭",
  "yowes apapun hasilnya.",
  "masi belum kah?",
  "Udah udah hehehe",
  "Tinggal 9 10 aja",
  "namanya belum -_-",
  "Udah no.1 sampe 8 wkwkwk",
  "Kost mu di daerah mana bil?",
  "Di gang XXb",
  "Kalo dari depan kampus ke kanan",
  "Ke kost?",
  "iya",
  "Eh jangannn wkwkwk",
  "oh yaudah",
  "Iyaa gak bolehh ke kost cewee",
  "ow begitu, besok ada kelas kah?",
  "Besok gak ada aku libur",
  "Lagi tabanan juga",
  "okay hati2",
  "Siap siap tha",
  "kalo kamu kesulitan di web, tanya aj jng sungkan, aku udh bisa ngoding sambil nari :D",
  "Siap siap 😂😂",
  "Nanti aku tanya tanya jgn risih yaaaa wkwkwkwk",
  "okie",
  "fandy",
  "dapet materi undirect graph?",
  "tida dpt",
  "basis data kah?",
  "Struktur data",
  "oww",
  "Baru mau tanya wkwkwk",
  "cob liat",
  "dpt tp lupa kali",
  "Wait",
  `class Vertex:
  def _init_(self, value):
      self.value = value
      self.next_vertex = None
      self.prev_vertex = None
      self.adjacent_vertices = []
      
      
class Graph:
  def _init_(self):
      self.num_vertices = 0
      self.first_vertex = None
      
  def add_vertex(self, value):
      new_vertex = Vertex(value)
      if not self.first_vertex:
          self.first_vertex = new_vertex
      else:
          current_vertex = self.first_vertex
          while current_vertex.next_vertex:
              current_vertex = current_vertex.next_vertex
          current_vertex.next_vertex = new_vertex
          new_vertex.prev_vertex = current_vertex
      self.num_vertices += 1
      
  def search_vertex(self, value):
      current_vertex = self.first_vertex
      while current_vertex:
          if current_vertex.value == value:
              return current_vertex
          current_vertex = current_vertex.next_vertex
      return None
  
  def add_edge(self, value1, value2):
      vertex1 = self.search_vertex(value1)
      vertex2 = self.search_vertex(value2)
      if vertex1 and vertex2:
          vertex1.adjacent_vertices.append(vertex2)
          vertex2.adjacent_vertices.append(vertex1)
          print(f"Edge between {value1} and {value2} added.")
      else:
          print("Vertices not found.")
  
  def remove_vertex(self, value):
      vertex_to_remove = self.search_vertex(value)
      if vertex_to_remove:
          if vertex_to_remove.prev_vertex:
              vertex_to_remove.prev_vertex.next_vertex = vertex_to_remove.next_vertex
          else:
              self.first_vertex = vertex_to_remove.next_vertex
          if vertex_to_remove.next_vertex:
              vertex_to_remove.next_vertex.prev_vertex = vertex_to_remove.prev_vertex
          for adjacent_vertex in vertex_to_remove.adjacent_vertices:
              adjacent_vertex.adjacent_vertices.remove(vertex_to_remove)
          self.num_vertices -= 1
          print(f"Vertex {value} removed.")
      else:
          print("Vertex not found.")
  
  def remove_edge(self, value1, value2):
      vertex1 = self.search_vertex(value1)
      vertex2 = self.search_vertex(value2)
      if vertex1 and vertex2:
          vertex1.adjacent_vertices.remove(vertex2)
          vertex2.adjacent_vertices.remove(vertex1)
          print(f"Edge between {value1} and {value2} removed.")
      else:
          print("Vertices not found.")

          
g = Graph()
while True:
  print("Select an operation:")
  print("1. Add a vertex")
  print("2. Add an edge")
  print("3. Remove a vertex")
  print("4. Remove an edge")
  print("5. Exit")
  
  choice = input("Enter your choice: ")
  
  if choice == '1':
      value = input("Enter the value of the vertex: ")
      g.add_vertex(value)
      print(f"Vertex {value} added.")
  
  elif choice == '2':
      value1 = input("Enter the value of vertex 1: ")
      value2 = input("Enter the value of vertex 2: ")
      g.add_edge(value1, value2)
  
  elif choice == '3':
      value = input("Enter the value of the vertex to remove: ")
      g.remove_vertex(value)
  
  elif choice == '4':
      value1 = input("Enter the value of vertex 1: ")
      value2 = input("Enter the value of vertex 2: ")
      g.remove_edge(value1, value2)
      
  elif choice == '5':
      break`,
  "aku mau bikin biar bisa liat hasilnya itu gimana?",
  "sek aku coba",
  "okey",
  "ini udh dicoba sebelumnya?",
  "Sudah mau jalan kok",
  "caranya gmana nambah angka, aku dpt err",
  "Hah? Gimana?",
  "cara masukin angka gimana",
  "Gini outputnya",
  "Dari g = Graph() ini kan",
  "owh sebentr",
  "Okee",
  "Bingung yg itunya wkwkwk",
  `class Vertex:
  def __init__(self, value):
      self.value = value
      self.next_vertex = None
      self.prev_vertex = None
      self.adjacent_vertices = []
      
      
class Graph:
  def __init__(self):
      self.num_vertices = 0
      self.first_vertex = None
      
  def add_vertex(self, value):
      new_vertex = Vertex(value)
      if not self.first_vertex:
          self.first_vertex = new_vertex
      else:
          current_vertex = self.first_vertex
          while current_vertex.next_vertex:
              current_vertex = current_vertex.next_vertex
          current_vertex.next_vertex = new_vertex
          new_vertex.prev_vertex = current_vertex
      self.num_vertices += 1
      
  def search_vertex(self, value):
      current_vertex = self.first_vertex
      while current_vertex:
          if current_vertex.value == value:
              return current_vertex
          current_vertex = current_vertex.next_vertex
      return None
  
  def add_edge(self, value1, value2):
      vertex1 = self.search_vertex(value1)
      vertex2 = self.search_vertex(value2)
      if vertex1 and vertex2:
          vertex1.adjacent_vertices.append(vertex2)
          vertex2.adjacent_vertices.append(vertex1)
          print(f"Edge between {value1} and {value2} added.")
      else:
          print("Vertices not found.")
  
  def remove_vertex(self, value):
      vertex_to_remove = self.search_vertex(value)
      if vertex_to_remove:
          if vertex_to_remove.prev_vertex:
              vertex_to_remove.prev_vertex.next_vertex = vertex_to_remove.next_vertex
          else:
              self.first_vertex = vertex_to_remove.next_vertex
          if vertex_to_remove.next_vertex:
              vertex_to_remove.next_vertex.prev_vertex = vertex_to_remove.prev_vertex
          for adjacent_vertex in vertex_to_remove.adjacent_vertices:
              adjacent_vertex.adjacent_vertices.remove(vertex_to_remove)
          self.num_vertices -= 1
          print(f"Vertex {value} removed.")
      else:
          print("Vertex not found.")
  
  def allVertex(self):
      values = []
      current_vertex = self.first_vertex
      while current_vertex:
          values.append(current_vertex.value)
          current_vertex = current_vertex.next_vertex
      return values

  def remove_edge(self, value1, value2):
      vertex1 = self.search_vertex(value1)
      vertex2 = self.search_vertex(value2)
      if vertex1 and vertex2:
          vertex1.adjacent_vertices.remove(vertex2)
          vertex2.adjacent_vertices.remove(vertex1)
          print(f"Edge between {value1} and {value2} removed.")
      else:
          print("Vertices not found.")

          
g = Graph()
while True:
  print("Select an operation:")
  print("1. Add a vertex")
  print("2. Add an edge")
  print("3. Remove a vertex")
  print("4. Remove an edge")
  print("5. Return all vertex")
  print("6. Exit")
  
  choice = input("Enter your choice: ")
  
  if choice == '1':
      value = input("Enter the value of the vertex: ")
      g.add_vertex(value)
      print(f"Vertex {value} added.")
  
  elif choice == '2':
      value1 = input("Enter the value of vertex 1: ")
      value2 = input("Enter the value of vertex 2: ")
      g.add_edge(value1, value2)
  
  elif choice == '3':
      value = input("Enter the value of the vertex to remove: ")
      g.remove_vertex(value)
  
  elif choice == '4':
      value1 = input("Enter the value of vertex 1: ")
      value2 = input("Enter the value of vertex 2: ")
      g.remove_edge(value1, value2)
      
  elif choice == '5':
      print("All Values", g.allVertex())
  elif choice == '6':
      break`,
  "coba, kalo kamu pilih 5, bakal return all value",
  "lain kali kalau kirim kode ke w.a kaya gini ya. pakai petik itu 3 kali diatas sama bawah",
  "Owhh okee",
  "Bntr bntrr",
  "kalo mau hasil pake gambar itu bisa gak ya?",
  "belum bisa aku, emang ada yg bisa?",
  "Gak tau wkwkwk bisa gak ya kira kira?",
  "iya belum bisa",
  "Owhh oke okee makasi yaa",
  "iya ratu",
  "kalo ga boleh di kost, boleh kah diluar?. 😁",
  "Diluar dimanaa",
  "ke pantai gitu",
  "Kapan nih",
  "kalo `kapannya`, aku cuman bisa sabtu/minggu.",
  "Nah pas bgt lagi sabtu/minggu aku kegiatan wkwkwk seminar sama pkm tu",
  "setiap sabtu/minggu?",
  "2 kali sabtu minggu ini sih",
  "1,2 smaa 8,9",
  "okay bil, mungkin belum waktunya.",
  "makasih",
  "Owh iya okey",
  "gimana uas-nya?, udah atau ada uas baru lagi.",
  "Belumm ini masih error wkwkwk",
  "apa, struktur atau web?",
  "Basis dataa",
  "Ini juga sih",
  "nomor brepe",
  "Bingung yg mana mau di kerjain ahahahah",
  "web jng dipikirin dlu dah.",
  "basis dlu, nomer brp?",
  "10 gak bisa update di fk",
  "Update data",
  "ku coba ya, aku sbenernya ga pakai msql, tp aku coba.",
  "Okeee",
  "perasaan ga ada di suruh update, emang kamu salah kah?, sampe mau update.",
  "Isi data ituu",
  "Kan aku create tabel",
  "Trs atributnya aku jadiin fk, nah aku mau isi itu dia gak mau",
  "Gak bisa delete or update katanya",
  "gimana cara updatenya?.",
  "Pake add foreign key",
  "Constraint",
  "Alter table",
  `UPDATE table
  SET atribute = 42
  WHERE id = 123;
  
  Tadi bilannya update, gini dung syntaxnya`,
  "Iya ttp aja gak bisa dy :)",
  "Errornya cannot delete or update fk",
  "Bntr aku solat dulu deh siapa tau abis ni lancar awowkkoks",
  "Ok me berak dulu",
  "itu data apa bil, terus yg jadi fk attribute apa?",
  "Table tb_pa",
  "nim kah yg jadi fk?",
  "Mau nambah ke noid, nim, dsnid",
  "Nim sama dsnid",
  "Gituuu ada yg salah kah?",
  "engga, coba kirim sini errornya",
  "Ginii",
  "ehm gini deh bil, add dulu semua datanya, baru jadiin fk",
  "Gimana caranya hapus fk nya ituu?",
  `chatgpt -_-


  ALTER TABLE table_mu
  DROP CONSTRAINT attribute_yg_kmu_jadiin_fk;`,
  "Owhh oke oke wkwkwk",
  `:")`,
  "udah work yang ini?",
  "Udah",
  "Sukses",
  "ini artinya apa bang?",
  "error atau success",
  "Eh tapi",
  "Masuk niiii",
  "Kok error di bilang 3 datanya tu",
  "dunno, ga ada error message juga",
  "magic happen",
  "Ini 10 kok bisa di atas yaa",
  "ngikut 1 kali, 1,1,2,3,4,5,6,7...",
  "coba lanjutin skrng mau diapain.",
  "Tapi ini udah bener kan?",
  "kalo itu yg kamu mau, udh bener.",
  "Gak sesuai soall",
  "Bntr bntr",
  "Tanya gpt",
  "kali no_id itu number tipenya",
  "Nah sekarang gak bisa di jadiin fk",
  "Dahlah",
  "ap errornya, cb liat",
  "drop tablenya bil, buat ulang, jng dilupain syntaxnya",
  "Iyaa ini lagi buat ulang",
  "Gpt pun error",
  "Padahal aku sudah masukin syntax semua tu",
  "ajak napa aku nongki biar bisa liat errornya langsung.",
  "Lagi di tabanan cuy wkwkwkk",
  "Selasa di kumpul ini",
  "ia tak samperin.",
  `coba pelan2, 1 per 1 bil
  buat table, tentuin pk fk.
  masukin data.`,
  `kalo pusing, berenti dulu.
  otak ga bisa dipake mikir kalau pusing.`,
  "Jauh lahh capek di jalan",
  "Siap siap",
  "Ini gak sih karena yg mhs 008 dia tu gak ada di tb_mhs makanya error?",
  "Ni gak ada kan yg ada 108",
  "Apa aku salah ya",
  "errornya dong copy, kirim sini.",
  "itu yg doesnt exist...",
  "Nah kan mau",
  "Wait",
  "Aku foto kah?",
  "copy aja",
  `Query: INSERT INTO tb_pa (no_id, nim, dsnid) VALUE ('1','09101008','2015.030')

  Error Code: 1452
  Cannot add or update a child row: a foreign key constraint fails ("dosen_pa"."tb_pa", CONSTRAINT "fk_nim_mhs" FOREIGN KEY ("nim") REFERENCES "tb_mhs" ("nim"))`,
  `
  ini lo yg _dosen doesnt exist, apa udh hilang ya err messagenya.`,
  "udah mau bener?",
  "udah ilang ituu",
  "iya mau kalo datanya ada di table referensi",
  `Jika Anda mengalami kesalahan saat memasukkan data pada kolom dengan kunci asing (foreign key), kemungkinan ada beberapa alasan yang menyebabkannya: 1. Nilai yang dimasukkan tidak ada dalam tabel referensi: Saat menggunakan kunci asing, nilai yang dimasukkan ke kolom harus ada dalam tabel referensi yang ditentukan. Pastikan bahwa nilai yang dimasukkan ke kolom kunci asing telah ada dalam tabel referensi sebelumnya. Jika tidak, Anda harus memasukkan nilai yang valid sesuai dengan kunci asing. 2. Kesalahan penulisan`,
  "ini",
  "ho'oh dosen pernah bilang juga, bisa jadi karna data di tablenya kosong.",
  "gg",
  "iyakannn",
  "tapi itu di soal bisaa",
  "I dunno mysql :D",
];
const Story = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="py-14 bg-pink-200">
      <p className="text-pink-900 text-4xl pb-8 text-center">
        I copied this message from June 6, 2023.
      </p>
      <div className="w-full h-fit flex flex-wrap gap-2 text-white break-normal whitespace-normal">
        {Words.map((d) => (
          <animated.p
            key={d}
            className="m-0"
            style={{ scale: scrollYProgress }}
          >
            {d}
          </animated.p>
        ))}
      </div>
    </div>
  );
};

export default Story;
