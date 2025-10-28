//src\componentes\Curioso\index.jsx

import './style.css';


import { useState } from "react";

function Curioso() {
  const [mostrarImagem, setMostrarImagem] = useState(false);

 
  const imagemCuriosa =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EAEEQAAEDAwEFAgsGAwgDAAAAAAEAAgMEBREGEhMhMVFBYQcUIjJxgZGhscHRIzNCQ1JiFSTwNFNjcnOSo8JEg5P/xAAbAQACAwEBAQAAAAAAAAAAAAAAAwIEBQEGB//EACsRAAICAgEEAgEEAgMBAAAAAAABAgMEESEFEjFBEyJRBhQyYRWBQnGxI//aAAwDAQACEQMRAD8A9xQAIAEACABACEgIAYqaunpW7dRKyNvVzgEudkIL7MlGEpPhFVNqe3sOITLOf8OM49pVKzqePD2WIYV0vWiO7VXH7O3zEdXPaFVl1uleh66dP2zkaqOfKt7/AFShcj1un8A+mz9Mfj1PSOI30FRGepZtD3KxDqtEvYuWBavBZUd0oqzhT1Mbz+nOD7FdryK7P4srSpsh/JE0FOFiroAgAQAIAEACABAAgAQAIAi11bT0EJlqZAxg4d5PQDtSrLoVLc2ThXKx6ijMV2oKyrJbSt8VhP43cZD8gvP5fWfVZqU9PS5mVe6DpN5ITJJ+t5yViW5Vlr+zL8a4w/ihwRkpG9ku463RRsO5Buyu7DuRyWIO7G5Imv8AOaCevb7UyFs4eGDSfkl0V1uFDgRSmeIflzH4O5rVxerzgtTKVuFXPlcM01qvVNcfIaTHOOcT+DvV1C9Fj5ld6+rMq7HnS9Ms8q2IFQAIAEACABAAgBEAVl6u8VujDQN5UP8AMjHxPQKnl5cMeO2PooldLS8GRmfNVTmoqpN5IeXRo6ALx+Xm2Xye3wblVMKo6idsZlUWxjkPsh7kCnMebF3LqIOZ0IR0XdEe8Xcjou6DvGnw9yPRNTGZI8BdSGRmMOZhDJqQ29uSCCQ5py1wOC09xTarZ1PcWdlGMlpmhsd9dI9tJcCBKeEcvIP7j3r1PT+pRuXbLyY2Vh/H9o+DRg8FrooCroAgAQAIAEAQLvcGW6kMzhtOPBjBzc7sCRkXxprc2Mpqds1FGLLpJ5nVFQ7bmkOXHp0A7gvFZOTLIs2z0Fdcao6RnLjq6JlcbbYqGa73BvnMg+7jP7n9it0dK3H5MiXairbl89sFthHbtf3Bu3Nc7VaweTIITIR6zn4prt6ZVxGLkV388+W9Ftp6yaloLg2S66jjuNHsnah8VDDnHA57uaTk5GHZXquvTOQVie5M1bWLOUB2zoMUuw53BsI7A7jl0fBRcDvcY676e1XUXCeot+q201O52Yqd1I0hg6Z7VrVZeFCCjKrbEuNm9qRWTza5sxL62job1St840mY5gOuOR9iaq+n5HEG4smrb6+XyWNi1Fbr8xwo3vjnZ97SzDZlZ6R9Fn5eBbjcvlfkuUZMbP8Ass5WB7S1wJ9CqQk4PcSy0pLTNLpq6PqGmjq3ZqIx5Lz+Y3r6eq9f07NV8O1+UYeZj/HLcfBfhahSFQAIAEAISgDDXas/iNxfID9hCSyIZ4HHN39dF5Hq2W52difCNzCpUIb9sxWpK6su12j0vZZTFK9m3X1LfyIugP6jw9qlhU149Lyrv9C8ixzn8cP9musFkobLRMpLfC2NjfOd+J56uPaVlZObZlWNyfB2NcYLSRcsakRjs42PManxgQbHWsT1FENnW7TVXsj3Bu+5Hxh3CFiXKBJMaexJcSSZHkj7kl+RqZjtWaUZcntuFtf4leIOMVRH5O3+1+OYWphdRdf/AM7eYsjZT3faPDGdK343emmgrYvF7nRu3dXAew/qHcVHqOCqGpw/ix+Nf8i0/KLwPfDIyohJEsZ2m/T1qtiXuizuRYuqVkWmbq31TK2kiqIz5Mjc+g9F7iqxWQUkebnDtk0SkwiCABAFVqOrNHa5nsOJH4jZ6XcPqqmbd8VLkPxq/ktSMhEwMY1o4ADC8LZJybkz0PjhCWu00VDV1dVSwhk9Y/eTvySXH19ncpX5ll1cYT8Iq9kYNtey3LmQxOkkc1jGjLnOOAB6Umqt2PUULnJIzFz8JmlrZI6Lx11VI3mKaMuH+7ktujo+TLl8FSV8SFT+GLTT5A2SKuiafxGIH4FXP8NYuUxf7hG409f7RqKDfWeujqGt85rchzfS08QlyxJ1/wAkHybLkM4KSrWjncKWcFz4w2RK6enoqd9RWTRwQMGXSSO2Q31pbx3N6ijvckYWv8K+k6aRzI6qepLTgmGFxb7ThMXSb5I780UN0fhT0nWSCN1ZLTOdyM8JA9oyAk29GyNbRKORE0sdTTV1OJ6OoinhdyfG4EFZFtM6n2zjouV2KXgr3UVPHVSVLII2zyANfIG4c4DkCV2V85QUG+EWIKO+5ClKRYLrSNUWS1FG7zfvWfA/L2r1XRsjvg4P0Y/UKkpKa9mpW4ZoIAEAZbV8pfU0dPngA6V3wHxKxOsSk4quPs0cBKO5y9FG6VrG7WDs9eQKpY36cysjnwivl9fxqHpPbEZdPK2IaYySnzAXAAnoreR+lJUVu2yfCM+r9SQvtVcYPkydy0RqjVcm3qG9QUdOHZbR0zDI1g9oBPecpFfUMLFXbTHbRpyrsnzIlUfga0+wDxmsr5z/AJmsHsAU/wDNTl4ic/bpeyTL4F9OTNxDU3CA9WyB3xCdX1ScvMSEqkijqfBBfrDUNuWk722Wph8qNr2bp/ozktPoOAVejlwsWpoU4tHrOlam61dippr/AELaO44LZomuBBIPncM4zzxngqd3YpfXwSWy0mcWRPexhkc1pIYDguPRLglJnWeI3HSOuvCFXmqvuxaaBjjuKeZ2RGO5g4k/udjK0VbTTH6i9Nk6m8BttjZ/O3mrlf27mJsY9+0qlnU5R8RGRq2dTeBWybP2dzuLXdTsEezCrf5mcXzEZ+3T9kCHwaX7TtQ+q0xqFm8/u5YiwPHR3Eg+xSl1bGuXbdE6qJwe4s1dBcK7xKMX2kbS1wyHMieHtcOxwI69OxKr6DLMfdivcRd/WqsOXZcnsksmY8bQDsDtwl5H6dzKedbHY/6hw7uN6Jdqm3N2o5QfJe/dnvDh9cJHTXOjI7ZLReynC6lyjybsL1piCroCHkgDG36WF9znmdh7qeNsbIz+Jx4+wZVqjDjKSm0Y+dntKVS9GemZPM7eS5c49vRbsFCC0jzM1OT2x+zQZrdpw8xpPrXm/wBVZTqw+1ezZ/TmN35Tm/RpY180h+Ue+ZJYrkBMiTEr9QmRJar0RTOlyTOAiICO5LsvAIjyqnahsSM9ULByIs3JVZMcigvUeQyTocH0L2P6RyO2bpfs8z+qMZOqNv4K6JsjSHxlwcO0L3ku18M8ZBTXKLKFwlY2c4jmgkY+ThjbAcOPpWFm9OrsmpJcnoundTnVHtb49nobCCARyKpaN6L2tnS6dEPJAGJrqMi+1Alzh7ttvfla1Ni+HjyjzGVQ1lPfhljWW+COlaWkE4SoXycuSzZiwUOChtdXROqqiCGoidOx2y+MOG03HcvG/qfIsvmkv4o3+i4Dx6nZJcy/8LuMrzFZsMksKtQYmRIjcr9UuBTRKYVdhLgSzvKZ5OAuaOHDioyZJEeRypWyHRRHeVRmxqIk7gAVWlz4HRM9frlQ0VIZa2cRxl2yHdm1zx7ltdFV2PkxtS0ivn4qy8eVS5fkubPQw1UYLXDDhkFe/syXruR4ujC57Z+SHeaERPcxnEk4wO1OqtUo7kVcjG7Z9sTbUjXR08THnLmsAPpwsaT+x6mpNQSY+uDBCgDMambu7pRTOJDJGGM+o5+qzc3KtxpRnB8D6sWrIhJTXPoi3ESRuDNo7CyM/q2TNdseNjsPp1Mft5PJNYOdYtb0t0DMxvcyVwxwcAfKB9SudNsjfjpT515NScPo0j2iCjhqaaKrtlQRDK0PjDjtsIPEf1lWLuj0W/aPBh/vJwbjJeDrcV0Yy6nEresLs+4rMs6PbB/XksRyK5oQVjIz9s2WL/Ujc35JKxrq/KJ7T8MkRXCldwFTCT03gTItog4j/jcP99H/ALwnqT0Q7QdWU7ec8Q9LwjvYdpHkuVLnAqI3Ho120fcoS75eESUdeRvfyzHEFLUP793sj34UFh3WeES74x9nQoa+QZfuYG95L3fIKxX0aT5myEsqMRWWmAcah8lQejzhvsC1aOmUVetlKzNsk9Lg888JVHU3y70dFC+lpbdScxLLsbwk8SGgHgBwycdqL51xXbE1untxj3NNtmlonS07I2RObu9nyC0gtI7iFiVdTysVtPlEcnBovbkuGSS1814oYSSS6QPd6AM/ILRq6pbk2qtcIow6bVTB2S5ZsWha2hR0g6CAKXVVMZ7W6VgzJTuErfQOfuyqPUKvkpeiziT7LVv2VUzhVUEU4OSG4K8peu6G/aNGv6WOJgvCNajXWUVMTczUrtrhzLe0J/Sb+yxwfsuaKbwfeEh+nIG226xPqLe0/ZOZxfDnnz5t7l6yu1x4ZmZeCrX3R4Z67YdaafvAaKK6wF5/LkOw8eop3fFmZ+2urf2RpAWuHUFReg5Rw+nhf95FG7P6mgrjhF+jqk/yN/w6hP8A4dN/8m/Rc+KP4Duf5FbQUbOLKWBp7o2j5I+KH4Duf5HmsY3zWtHoGF1RX4ObbFLg0ZJwBzUtHDN33Wmn7OCK25wh4/KiO8efUEOcYko49tvEUYlnhON7vMFttVG6CleXOlnmPlua1pcQAOWcJU8jjgux6YoR7pssLVRQVlHNV1r3GpkO1k9pWKvv3Ska0pSqcYQXBJ05DsXCqoyfs9gStHZkHB+I9iTOCnDn0JzH26kvZe6fj8avFTWYzHEN1Ge/t92FZ6VVy7GUsyXbBVmmW6ZwqABAHL2B7S1wy0jBC49PhgYxkRttdPb5M7t3lQn9p5fReSzqfgtkvTNmuStrUl5REqomO243gFrhghZKm65pouwe0eJ6usr7NdpIQDuHkvid3dPUvX4mRG+pSQNFHjqrJHtLS3ahvVt/sN1q4R+lspx7DwXe5oi6YS8o0NL4U9XUrcG4snH+NCw/ABdU5CZYVL9E+PwzamYMPit7z13JH/ZSVkhTwqhX+GjUzh5MNvb37on/ALLvySOfsqiBVeFbV1SCG18UH+lA0fHK45yGRwqfwZ+4ajvVz/t91rJgebXSkN9g4Jbk2WYUVx8IrAOgXBySRpNCNzfs9raSc/8AGfqlz4ixd/hL+z1y3sDaVg7lmrwTlyzmJ8kV1kMAJkfSPa0DtJLVKMZT2kVslpRTf5NxZqIUFBFBzePKkPVx5rZxalVUomJdY7JuRPVgWCABAAgCpv1sNfTh8PCpiO1Gev7fQVTzcZXw/ssY9zql/RlhJvoyHAtlacPaeYIXi7q3CXbI24NeV4KXUlkhvlvdTSYbKOMT/wBLk7Cynjz/AKHejxu40FRbquSmq2FkrDx7+8dy9XXONke6PgiRDwUwbHKOkqK+oZT0sbpJXnDWtHElHgWty2Wd10vXWzZbUSQOkPNjH5IUfkSHQw7LY90StpLZWVdRuKeFz5M4wFLuQiONbtokXGyXC2ECsg2CRkYcHcPUudyYz9vYl3LkhNK6RjIt7DZqi9TvZA9kcMQBmnf5sYPLlxJPYAoSajyyUre3xyz0DT9mobBS1kw8aqqmWF0Ym3QY1oI7BklVLbk/BFwsm1vg19IMU7fQqq8E5eRuG4w2u+QVNQ17mbp7fIGSM47E7HtjXPbEZNMratR87Nta7tQ3OMuo52vI85vJzfSDxW1C2M/DMOymdT1JFgEwWCABAAgBCgChvtldUvNXRANqQMObyEo+vesvP6fHIW4+S7i5TrfbLwZkOBcWlpbI04c1wwQV5K6mdUnFm1CSlHaKnUen6O+02xMNiZo+zlaOLT9FYw82dD16JaPKr7pq52eQieAvi7JYxlpHyXpaMqu1bTFyTfgsrFi10Uk0R/mX+SD2tCjZZtm3jYcYwWziZz5CZJCXOPaUre2aUYqEdREY8tZhpwTxdg80SkyFVa1toQ8jnljiore+BnZFLRY6e05SyPNyrIRLFtbEFO/OzI4ec52PwjI4dpPQFPd/bXv2eYzqF+47K3/2bKla+Sppqd+yIW5LY2sDWjA6AAKnK2c/JGNUK/svJeVcLX0cjABxYezuUe1EU+RaFwdSxOHa0H3IOS8kG5U5qa+Bg4Yjcc+sfVcaGQkkiI+GptlQypp3lsjOLXj4ehSqm65bQWRjdFxZ6VY7rBdqGOohe3aIAkYDxjd2greptVkdnmbqpVTcWWSaKBAAgAQAIAqrtZae4DbOY5x5srefr6hU8nDrvWpIfRkTpfHgy9bQVluP81EXR9k0Qy319F5rL6ZbS9x5Rs05ldnHhkYFkrObXtPZzCzfvW+HospplZVadtdS4ulg3bv1RcFZrzZx4bHLJuivqyDJo+3uPkVk8Y6Oiz8FdhnrXIxdRyF5jsZboui28uuE7h0bBj4rss+JN9UvfiCRY0umbTTYc2EzOH4pTn3Kpbmzl/FiZ5d8/wCT0TKiFgr6WFrWtZFADsjsy4n6LQrcvijsqVNtymTH0zHSxPHAxkngOeRhMJdz8Eg8UHBGtDGhrQA0cgByQAhjbvBJjywC3PcuAcVEQlic0gckaOxbTKvR9U+iv0AjP2c8jont7COOPerGHY42aFdRrjKru9o9Tyts84zpdOggAQAIAEAcloPMLjWwRVVmn7fVOc7c7mQ83wHYJ9OOaqW4VNv8kPrybYeGVs2lp258WrQR0mZ8ws2fQ62/qy5DqL/5IjO09dW8B4q8ddsj5KtLoc/Uhy6jX+GI3T92PAspm/8AtJ+Sj/g7Pyd/yNf4Y9Hpitd9/VQRjtEbC4+/6J9XQ0l9mKl1Jf8AFFFdoPEtSGAvc8CGPDnc3cEzIqVUlFFzDn30uX9k4JQ0EACABAHMv3buOOB4rgeyu0jR7/UVOGZLKYGRxI7se8lWMOvus2K6jYo06/J6aAtpnnjpSAEACABAAgAQAiABAAgAQAIAwuvYDDc6KtA8mRhjJ7xxHuJ9iyeo18qSNjpc9qUDqkbFNSGXegP/AAt6qvCClHZZsnKM9a4HXUUwYH7OQh0yS2RV8d6GC1wOMJbi16HKSEOQuaZ3ZCudS2CBxJUX+CcFztml0VanUNv8YnaRUVWHOB5tb+Ef11Wzh0/HDb8mHnX/AC26XhGkVwpAgAQAIAEACABAAgAQAIAEACAKrUNpbeLc+mLgx+Q6N/6XDl9PWk31fJDtHY9zps70YhkNfaXGO4UsjWg8JWjaYfWPmsaVFkODdjkVXLeyyp9SwsbuzPGR0LkyN8orTQqWIp8oJdQUZBPkE9xXHkb9HViy/JVVV7jkkIpxtOJ4NbxPuSW5SfCLCgoR+zJtm07W3SoZUXNjoaRp2t2/zpO7HYFbx8STkpTKWVnRjFwrPQGjA5cOxa6WjFOkACABAAgAQAIAEACABAAgAQAIAQoA4K4cQzLS00+N9TxP/wAzAVx1xflHfklF8MZ/g1r2s/w+lz13QUfhr/BNX2fkfhpaen4QQRxj9jAF3tjHwglKUvLHwFJeBfs6XToIA//Z" // 🔹 coloque o base64 completo aqui

  return (
    <div className="curioso-container">
        <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 className="curioso-titulo">Clique se for curioso 😏</h2>

      {!mostrarImagem ? (
        
        <img
          src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" // imagem de capa
          alt="Curioso"
          className="curioso-img capa"
          style={{
            width: "250px",
            borderRadius: "15px",
            cursor: "pointer",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          }}
          onClick={() => {
            alert("👀 Viu só? Você é curioso!");
            setMostrarImagem(true); 
          }}
        />
      ) : (
    
        <img
          src={imagemCuriosa}
          alt="Curioso de verdade"
          className="curioso-img revelada"
          style={{
            width: "400px",
            borderRadius: "20px",
            marginTop: "20px",
            boxShadow: "0 0 15px rgba(0,0,0,0.4)",
          }}
        />
      )}
    </div>
    </div>
  );
}

export default Curioso;
