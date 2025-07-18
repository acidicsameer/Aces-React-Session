

import { Link } from 'react-router-dom'


const Navbar = () => {
  return ( 
    <>
   <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
    <a href="#" className="flex items-center">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAygMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAABAwIEAgYIBQIHAAAAAAABAAIDBBEFEiExBkETIlFhcYEjMkKRobHB4QcUM1JiJNEVRFPC0vDx/8QAGwEBAQADAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAwEQACAgEEAAQEBQQDAAAAAAAAAQIDEQQSITEFE0FhIjJRoRRCgZHwcbHB8RUj0f/aAAwDAQACEQMRAD8A4deafp4BATGqMjJgKGIWUA0AIBWQAQgIkKlJBQgwEIPKgyGUoTI23B1KFyWjVQwE5UqKyhURQyIqlEVUVEUBFCggGgBAJANASCEZMFQmAuoQV0BIIAQAgCyAegQxJXCAYUISshANmgm9rDcoTOOTm8Q4geXllGMrG+0Rq5dcKElyfNavxme7bSsI3lDK+WmjMv6hGq1WQ28o9zS3Ssri5dljgtR2IihkRVAiEKRVKRQoIACAaASAYQDQgwUAFMAagwSBUMRoAQAEIOyDJJrddSoRkhZDHI0BrsfqOgwySxs6Q5B9fhdbaY5meb4rd5WleO3x/P0OSjLTIwvGmYLuPkYYys/U7Wg60o16trrmseEz7CjnGDKkjtfsXLk9CLKSLKmaEQhSJCFIuFlUUgqUEA0AIBIAQDCAYQAhB3QBdRjBNqhGSAQhJCAhDIoqSevq4KOlbmnneGMHIdpPcBcrOuDnJI5NbqVp6XYzMq+B8cpW543QTXdYGOYA3tf2rD3E8jsu10HzcfFlnPT/AJ/OjmpK6eiqpKasbaSI5XMJFwfEaLROn6Ho0eJ55lyjVcQ1RquidG0iJg1vycVnTFRycPi+od7i4/Kv7mlvot54rfB2eDOLmxF2t2Lku+Vn2GjeVHP0/wAG/jHW1t9lyS6PST5Ka6kMPpGD0Z5XvlUhPPD7Nph2WwBlQpFzEGSkhZIzFZANACASASAkEBJCCQAgGFATbsoQkEINCDAuUIQpMcnwvEhLSSRxSR3bmlZnBB+Wml+wldulgl8TljJ874va7f8Aq2ZSeeOzY1nHmJzUj2OhifOGObDU07gDHmsT1XAg3yi/mNLru8ueHjD90z5zy69yXK9mv8o8+6KeVzi1lySTrYLjfudyjZJfCi5lPPazgA06EFwUybo12tc/3Md2GVWpEYcO5wWamjkl4fqO0vujpsIHRPhYSLhpB9xXNd8rPpdH8O2L7OkbDJCIZJGFrZmZ483ttuRf3gj4965pJpcnoRsjKTUXlrh+zM9kbJIddiCFoa9TapGiqYDBM5h25LdF5RmUrIEXmwQpQVTIiSqUV0AXQDKAQQEwgAlAJACAYQFjdliYsaEJBAOR4hifIRo0XtfdEsvBqtsUIOTOWrKmpqn9M6NodbTlZd0YqCwfJ6jUW3S3yRrnTSZrOcW+AWeEee7rN2JPBdE+SN4eyXMOYPJR9G+E5xakpZRmZ3utY781rzg7VKT69TMgY52hcWrXKzHR1VVt+uDecK4PUYnjMNDE3WV1i8bMZ7TvIfRY582SijfOz8JXK2fodHxJVQ1WN1DKYf01OG00AbyYzT55j5rC5rfx0jd4dXKGnTl80vif9X/ERpJdOuSWnu59uy5mz0cN8mFixDpIw0XdY3t5W+q2VRcs4Ni6NdK10Tix4LXDcFZtNPDCeSiQqGSKSVkZEUAIAQDKAYQDugBACAEAwgLW7LEjHZDEsYFCM1HEbTK1jWv0aCcjXWLibWv8Vv06aPD8XTklFPrPHqzSzWj0f0jR+5rrhdfZ4tiUOJZ/qVNjFy/pg9oGl1Ga4wz8W7KE2J/SZwMzewfZTJFW925dGdTZsgJyEb2vqFqk+T0KU9qyZkGbLoLtcb5rmwWuT5OuvGOD1HhZowXgXE8beDFWTxdFSlwsbHqhw7sxJ8GrdVF11SsOLXS/F6uvTrlLv/P2OFZVOpw25L7bkclxqOT3fNcO+TLbiIs27HEGwAbvdY+Xng3q9cMy6KGXEcZipYetY2kLdu8eA29679LTzj9zO25Qrc5dI6T8RcKipKegqo2gSE9E+3PS4+RWWvgsqR5PhGqlbOyL67ODkNguFHvopVKCAEAICSASAAgGFQNACAYCgLGrEhYAhGKeZtPE5xLQ+3Va42uVYxcmc+ouVUG2+fT3OWfTvdPJK6YSvJ3dzXanhYwfJ+TN2Sm5Zfv98exjvkAdkkBZ3g3CyNM5pPZJYE5oDmtksB7LgNCo+CbVnDL4ow+Q9chwFwdrrFywjorrzLsyujcP1coPIgalanI61Br5/sdFwlg0nEGMU+HwyENvne8+ywbn6eYUhBzlg2X6laelzznHXuzufxWxGCGPDsCg9EKdgke0C4A2YPmVu1TSxBdHB4NTvc75+vH+WeZPnHTZCQXEDKWjfuXOo5WT1JWfFt9TNaySicIwc1c7QBuoiH/L5LZGDzwuTqri18zPT/w/4d/wylNVVC0rwN+Q7F6tVSqgeJ4pr1PFcOjB/EutbIaWlbqc5kcOywsPn8F5+slwkdngNLW6z9Dz6VcSPpipUAgBACAZQCQDVKMIQEA1ATAUBNqhCwclCHNY65s9Xl6Vgy6F5d8AOX1XZSsRyfI+KvzL9u79c/ZL+ZMTI2Jlw4yjnYm4W3k5dsYR45JMcHOEsbhI0D1XDUI1wWEtz3ReSD2F9nZhlvpY2sopGMq93Pob/hjChimJU2GSOEb6gkMlLb2NiQLab2stcVvnhHW3+HpcpRyxy0E1HiUlFLC+KdrshYW3N+zxPxutUk18Pqd1e2S8yPytd/z1PZ+DMCi4awCSoxKNkVVIwy1DyfUaBo2/hqe8lehp4OqDkz5rXX/i71GtcLhf+/qeR45itRimI1NXVA553FzTsQLWaPcAvPslvlvPpaa1RTGp+iMaHpKcxuy3q3j0bbXyX5+KzjHnC7N0FLiUuz0DgfhQRgV+IdaQm9ncvuvUooUFl9nl6/xDatlZ12PYzTYVhzsxBJ6rWA7lZW2RrjuZ5Oi01mruxH/R5NX1k1bUSVFQ673nbs7l4c5ucss+/wBPRCitQguvua+Q6qI3kEAIAQAgGhQVAIQaAEBIKMFgWIJtQgqkSflZeiLWvyHKXGwukXiSyaNS5KqWzvHBzQw9sTnuM2Z+YjMOa7d7+h8stGotycsv6mHJLkkySAOHJ40KzXJxTs2z2yWfcUoc3qsbdu+YDUoJblwl+pdBdjgXNzM9rmbLGXRtq4fK4N3hFVJR1dPU0znOMMgewE7EHb6ea0btrz6npqpW1uv0f2PomgqaPFaSmxNkUbukYHMlyDM2/K+48F6sNs0pI+RshZTKVUsrD/n7nL/ipjH5DARhzZB0tebb6hgN3e/bzK06qe2GPqej4RR5l+/0j/c8gzEtbJI0Ode0TLese3wC8+McPj1PqG9/Z3XBvC+S1fiWsjjfrDUd69bT0KC3S7PJ1+u2rZA6jGMYp8Kp+s65t1YwdSexbbbY1RzI8vS6S7WW7Y/uecYniE1fUGaodcnZvJq8S66V0t0j7rR6OvS17If7Ne9y1JHWUlUAgBACAEBJCgqQEAIBoCQKxYJBQFjQgNdjDWSPjBe4ObvYrdTlcnj+JRhJpNmjlMrH2gc57ed10p57PAsU4y+B5IiV0ZINNdx30ujwY75QfycmVE90p9JEYha1r7rB+x01zc/mjgvDSwkx2IO4AWD57Nyi4/L6lkJy6uHUOu2y1zN9fHfR0OA8TYngIdHhdVlidq+GQZm+IHIqwtnX8ov0Wn1OHNcr35NfiNZUYziMtTXzPfI4XfIT6rRyt2cgO9N0py3SZnCiuteXBYR0vBWAnEKgYhUMIhZpCw8gF6Okp/PI5dfqlTDZHs6nG8apsLgAY4PkI9GwLouvjUsvs8rRaCzW2e3qzz+srZauZ00zy57t9fgvEsslbLdI+40+nr09fl1rCMRzrrDBvIFUEUAIAQAgBASVKCEBACAaAYUKWNCxZCupqBE3K3V559i2Qrzyzk1GpUFiPZqp3F7iTut+McHi2yc3llWUDb3oalHHRJjCDfUG+luaGxJ9mS25/bbstzWtpehtWX2SEB3DbeBv/wCLDebFS3yi+KNrW2uHdo2usJNPlm2ENv0IvZGx1wLEbAph9ExBPK4NhguFy4piDKKMdW4dO7/b/wB5rropc5Y9DVbaqq3Yz0fFsRpuHMJEULR0wGVjBprb5L1LrY1QPA01E9fqMv5fU8zqqiSomdLM7M9x1K8ScnN5kfaUVRpgoQWEU3WJ0AhRFACAFACAEAICSpkCAEISsoAQDYEGcEJ5xGC1u62whjlnBqNTt4Rr3SZidVsPLlPcyBu42GxVMcNkhHffQ8lM4KoouZFfs89rrXKRujDKJlrQ0jQ9iwTeTLbx0GcNItmZ2EI1kbto3yk6uII5G2oUUfoWdrxl8jhJcWSZc7jpAwjVzu3wHxW2MWujVnf/AEPUeGMOg4bwM1da4NkcC973Dn2L1qq1TDn9Tw9dfLU3Kqvo8/xvFpMXxGWqkJyk2jaeTeS8q612y3H0+h00dNUoL9TAzLUd6GCoZDBQyQIUEAIAQAoAQElTIEA0BIICxrAfWJA7uSnKNUrYropmZIGEgks19VbYSh+pw3Oz1fBhFpeb5XOOy28I4ZZk+iPRjYs581jlDZn0LGReybeSwczYodIta3SwbfLrqFrbybEsFgkGW17dxGhWtxNiksclL3RkXIy/yaVklJGEnBrPXuY8kgPVi67jyA1WyKbOWyyK6JRxhrw2QdJMTpAw31/kR8vetiWXhcmuMW3l8HfcJcMmJzcUxa3SAXYw7MXo6fTbfjl2cOt1qivLrMHjviYYlIKCjf8A00ZBc4e277Ln1eo3/BHo6PCtE6l51nzM5IHvXCe9FkwUNsWSCGZIIVDChkgQoIAQAoAQDWRkNAO6BDN8ptvZBLO14Nf09dGwkxPdG3cgZgPcs9mT5uWpsg/iRFuKZSMze24vso6wtcvQtGJQyD0rde1qw8tr5TctZW18f2F+cidoJBble6u1+oWog+iL62Fm5tfXTZZKLZhLUQiuTHkxGLXKD2WHIKqs55a2GeCH5yab1Iz3nl7+SqrwYfi5T4SGGNJBfMXu/ZEL/G391lwTEp+pucLwLEK0hsMJpYDu4nV3mdSt1ennZ7IrsrpXLOxwzDMH4ejM072vmA1e8rvhVXSvc8+3VWXPbX0aLiPjGWuaaWiJjh9pw0LvBcuo1Tl8MDp0mijB77OWcuH32XDg9mMmy1l1izfDJc1Q6YomAhsSJDRDIYUKgQoIAUAIUEBJZFBACAd9LHmqiPGOTVVERhkuyUtJ2IdZbEvofPamtwlyYk7Hy3MgzO/eN/us8s4J0RkVNp/5PHdlCZ9jX5El1ItZROcerHM89wsssP6DyfqzLhwesf6lDI4H/UcfpZVVzfoNkF2/uZ1Pw5XE3LYYPLVbFp7GN1MfU2EXDVJH1q+uv3A2WxaaP5mR6iK6WTNiqcBwpt4WNc4aXOqzTqr6RhKd8+uEYGIcavN2UjQ0X0ssJ6l+hrVUM/E8mgqMQqa9+aaQu7lyTnKXbO6mMfyoI43HcFasnoV1SZeyIqNnVCkvZHZYnVGvBYGoblEnZDLAWQuB2UAkAKAEKCoGgGqAQAhRWuqYsxKqgbUG+ZwPcqm0efqfD43ct4MQ4TO39Oe3is9/scD8ItXyWfuIUFc09WWM+IKyU0a34ZrF+aL/AHL44sSZtJH5ErLzcE/4vUvvaXB+LAWE7PeVfxDH/EXP6fcCMUd/m2jwBWPnsyXg9v1X7NlTqCqk1fWO8m/3U832Ni8Gn6z+xEYMw/qTyP8AMLF2MzXglf5ptlzMKpWci7xKxc2dMPCdND0yXNpomeqyywydcdLVDpEujFtkM/LQwxDNQJAIZYHZCiQAhAUAkAKEGhQVAIBoQFSggAFAO5QgXKuQF0yBpkEbqZAIAQAhQKASgBAMKjIXQCQZBACASgBCAoAQAgBUDQEiqQLIUAgBAI7IQbUA3ICPNCjKAQQEwEMWMgWVCK+ahkIoCTUAigEoUFSAUKJQgIBqAEAKgEB//9k=" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hamro Jutta Pasal</span>
    </a>
    <div className="flex items-center lg:order-2">
      <div className="hidden mt-2 mr-4 sm:inline-block">
        <span />
      </div>
      <a href="https://themesberg.com/product/tailwind-css/landing-page" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</a>
      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="true">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/blog" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
        </li>
        <li>
          <a href="/edit" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Edit</a>
        </li>
        <li>
          <a href="/about" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="/single" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Singlepages</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


<script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>



   
   </>
  )
}

export default Navbar
{/* <a href="/">Home</a>
   <a href="/about">About </a>
   <a href="/blog">Blog</a>
   <a href="/edit">Edit</a> */}