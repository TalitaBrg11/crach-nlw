const linksSocialMedia = {
  github: 'TalitaBrg11',
  youtube: 'RocketSeat',
  facebook: 'talita.borges.1989',
  instagram: 'maykbrito',
  twitter: 'rocketseat'
}

function changeSocialMediaLinks() {
  // userName.textContent = 'Talita'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
