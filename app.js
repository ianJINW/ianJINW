let sect = document.querySelectorAll('body >*')
const hImg = document.querySelector('.hImg')
const aImg = document.querySelector('.aImg')
const sideBar = document.querySelector('.side-bar')
const toggleBtn = document.querySelector('.toggle')
const closeBtn = document.querySelector('.close')
const nav = document.querySelector('.nav-bar')
const sideA = document.querySelectorAll('.side-bar a')
const detail = document.querySelector('.detail')
const desc = document.querySelector('.desc')
const info = desc.querySelectorAll('p')
const headerH = document.querySelector('header h1')

window.addEventListener('scroll', () => {
  // Generate a random color
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
  // Apply the random color to the body's border-left style
  document.body.style.borderLeft = `1px solid ${randomColor}`
})

let index = 0

headerH.addEventListener('mouseover', () => {
  headerH.style.opacity = 0 // Fade out
  setTimeout(() => {
    headerH.innerHTML = 'Njenga Ian'
    headerH.style.opacity = 1 // Fade in
  }, 300) // Wait for the fade out transition to complete
})

headerH.addEventListener('mouseout', () => {
  headerH.style.opacity = 0 // Fade out
  setTimeout(() => {
    headerH.innerHTML = 'My PortFolio'
    headerH.style.opacity = 1 // Fade in
  }, 300) // Wait for the fade out transition to complete
})

function displayInfo (index) {
  const current = info[index % info.length]
  detail.innerHTML = current.innerHTML
  setTimeout(() => {
    detail.style.opacity = '0'
    setTimeout(() => {
      displayInfo(index + 1)
      detail.style.opacity = '1'
    }, 1000) // Wait for the opacity transition to complete before showing the next item
  }, 3000) // Display each item for 3 seconds
}

// Start displaying info from the first item
displayInfo(0)

// Start the infinite content change
displayInfo(0)

sideA.forEach(a => {
  a.addEventListener('click', () => {
    sideBar.style.display = 'none'
    toggleBtn.style = ' float: right; display: block;'
    nav.style.display = 'block'
  })
})
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('active')
      }, 500)
    } else {
      entry.target.classList.remove('active')
    }
  })
})
sect.forEach(section => {
  obs.observe(section)
})
// Create a new IntersectionObserver instance
const observer = new IntersectionObserver(entries => {
  // Loop through the entries
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      hImg.style.opacity = '0'
    } else {
      hImg.style.opacity = '1'
    }
  })
})

// Observe the about section's image
observer.observe(aImg)
sideBar.style.display = 'none'

function open () {
  toggleBtn.addEventListener('click', () => {
    sideBar.style.display = 'block'
    toggleBtn.style.display = 'none'
    nav.style.display = 'none'
  })
}
function close () {
  closeBtn.addEventListener('click', () => {
    sideBar.style.display = 'none'
    toggleBtn.style = ' float: right; display: block;'
    nav.style.display = 'block'
  })
}
close()
open()

const fetchData = async url => {
  try {
    const req = await fetch(url)
    const users = await req.json()
    localStorage.setItem('githubIan', JSON.stringify(users))
    renderUsers(users)
  } catch (error) {
    console.error('Error fetching data:', error)
    // Handle the error, e.g., display a message to the user
  }
}

const renderUsers = users => {
  const container = document.querySelector('.wrap')
  users = Array.from(users)

  users.forEach(user => {
    const wrap = document.createElement('main')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const description = document.createElement('p')
    const url = document.createElement('p')

    wrap.classList.add('portfolio-item')
    img.src = 'https://avatars.githubusercontent.com/u/138765105?v=4'
    h3.textContent = user.login
    description.textContent = user.bio || 'No description available'
    url.innerHTML = `URL: <a href="${user.html_url}" target="_blank">${user.html_url}</a>`

    wrap.appendChild(img)
    wrap.appendChild(h3)
    wrap.appendChild(description)
    wrap.appendChild(url)

    container.appendChild(wrap)
  })
}

// Check if data is available in localStorage
const cachedUsers = JSON.parse(localStorage.getItem('githubIan'))
if (cachedUsers) {
  renderUsers(cachedUsers)
} else {
  fetchData('https://api.github.com/users/ianJINW/repos')
}
const headers = document.querySelectorAll('header nav ul li a')
function headerUpdate () {
  sect = Array.from(sect)

  // Filter sections that have both classes 'fade-in' and 'active'
  let sections = sect.filter(
    el => el.classList.contains('fade-in') && el.classList.contains('active')
  )

  // Iterate over filtered sections
  sections.forEach(section => {
    let sectId = section.getAttribute('id')
    if (sectId) {
      // Iterate over headers and add 'active' class to the one with matching id
      let correctHeader = document.querySelector(
        `header nav ul li a[href="#${sectId}"]`
      )

      headers.forEach(header => {
        header.classList.remove('active')
      })
      correctHeader.classList.add('active')
    }
  })
}
window.addEventListener('load', () => {
  let target = 100
  document.body.scrollTo({
    top: target,
    behavior: 'smooth'
  })
  headerUpdate()
})
window.addEventListener('scroll', () => {
  headerUpdate()
})
headers.forEach(header => {
  header.addEventListener('click', () => {
    let target = 100
    document.body.scrollTo({
      top: target,
      behavior: 'smooth'
    })
    headerUpdate()
  })
})
