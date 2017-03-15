User.destroy_all
Article.destroy_all
FactCheck.destroy_all

user_one = User.create({
  email: 'j@email.com',
  password: 'password',
  password_confirmation: 'password',
  username: 'Jordan'
  })

user_two = User.create({
  email: 'k@email.com',
  password: 'password',
  password_confirmation: 'password',
  username: 'Kay'
  })

a1 = user_one.articles.create({
  title: "China Sells Corned Beef Made from Dead Bodies To Africa",
  url: "http://www.tunezmp3.com/china-now-producing-corned-beef-dead-bodies-sending-africa/"
  })

fc1 = user_one.fact_checks.create({
  category: "False",
  claim: "The picture shows the shop in china that sells human bodies as meat.",
  evidence: "These photographs come from a number of sources, but at least one of them was taken from a 2012 marketing stunt for the video game Resident Evil 6, in which a butcher shop selling fake “human meat” was set up at London’s Smithfield Market",
  sources: "http://kotaku.com/5947404/resident-evil-6-meat-stunt-might-make-you-lose-your-lunch",
  article:a1
  })

a2 = user_two.articles.create({
  title: "BLM Toronto, Justin Trudeau is a white supremacist",
  url: "https://www.youtube.com/watch?v=xHbSbtzPXtU",
  embeded: "https://www.youtube.com/embed/xHbSbtzPXtU"
  })

fc2 = user_two.fact_checks.create({
  category: "False",
  claim: "When Justin Trudeau says that (he will accept those not allowed in US into Canada) ... he is a white supremacist terrorist.",
  evidence: "There is no evidence to support the claim that Trudeau is a white supremacist, in fact his cabinet has been celebrated for it's diversity. On the 31 in his cabinet, half are female, 3 are Sikh's of Indian descent, Maryam Monsef is an immigrant from Afganistan and two are Aboriginal",
  sources: "https://www.theguardian.com/world/2015/nov/04/canada-cabinet-gender-diversity-justin-trudeau",
  article: a2
  })