import { useState, useEffect } from "react";

import './style.css';


//CARD SIZE
//width: 300px
//height: 480px
/////////////////////
/////////////////////
//---CARD-AVATAR---//
//---height: 55% --> CARD-SIZE = 264px
///////////////////////////////////////
//---CARD-BODY---//
//---height: 45% --> CARD-SIZE = 216px
//
//-----TITLE
//-----height: 40% --> CARD-BODY = 86.4px
//-----DESCRIPTION
//-----height: 60% --> CARD-BODY = 129.6px
//////////////////////////////////////////


const Card = ({ results }) => {

  return (
    <div className="flex gap-5 justify-center flex-wrap">
      {results?.length ?
        (
          results.map((character, index) => {

            //Destructuring character variable
            let { name, gender, species, status, origin, location, image } = character;

            //CARD COMPONENT
            return (
              <div key={index} className="card flex flex-col relative">
                <CardAvatar image={image} name={name} />
                <div className="card-body h-[45%] px-4">
                  <CartTitle name={name} />
                  <CardDescription gender={gender} species={species} origin={origin} location={location} />
                </div>
                <CardBadge status={status} />
              </div>
            )
          })
        ) : <h1 className="h-screen uppercase text-4xl">No characters found</h1>
      }
    </div>
  )
}


const CardDescription = ({ gender, species, origin, location }) => {


  //to maintain consistency between the cards change the length of the longer strings
  origin = origin.name
    .replace('Earth (Replacement Dimension)', 'Earth (Repl. dim.)')
    .replace(`Earth (Evil Rick's Target Dimension)`, `Earth (Evil Rick's dim.)`)
    .replace('Earth (Giant Telepathic Spiders Dimension)', 'Earth (Telepathic Spiders)')
    .replace('Rick and Two Crows Planet', 'Rick & Two Crows Planet')
    .replace('Earth (Unknown dimension)', 'Earth (Unknown dim.)')
    .replace(`Birdperson's Consciousness`, `Birdperson's Consc.`)
    .replace(`Tickets Please Guy Nightmare`, `Tickets Please Guy Night.`)
    .replace('Earth (Fascist Teddy Bear Dimension)', 'Earth (Fascist Dimension)');

  location = location.name
    .replace('Earth (Replacement Dimension)', 'Earth (Repl. Dim.)')
    .replace(`Earth (Evil Rick's Target Dimension)`, `Earth (Evil Rick's dim.)`)
    .replace('Testicle Monster Dimension', 'Testicle Monster dim.')
    .replace('Galactic Federation Prison', 'Galactic Fed. Prison')
    .replace('Interdimensional Customs', 'Interdim. Customs')
    .replace('Earth (Giant Telepathic Spiders Dimension)', 'Earth (Telepathic Spiders)')
    .replace('Rick and Two Crows Planet', 'Rick & Two Crows Planet')
    .replace('Earth (Unknown dimension)', 'Earth (Unknown dim.)')
    .replace(`Birdperson's Consciousness`, `Birdperson's Consc.`)
    .replace(`Tickets Please Guy Nightmare`, `Tickets Please Guy Night.`)
    .replace(`Non-Diegetic Alternative Reality`, `Non-Diegetic Reality`)
    .replace('Earth (Fascist Teddy Bear Dimension)', 'Earth (Fascist Dimension)');;


  const list = [
    { "Gender": gender },
    { "Species": species },
    { "Origin": origin },
    { "Location": location }
  ]


  return (
    <div className="h-[60%] flex flex-col justify-start text-lg">

      {list.map((itemList, index) => {
        return (
          <h5 key={index}>
            <span className="font-bold uppercase">
              {`${Object.keys(itemList)} -`}
            </span>
            <span className={`${Object.values(itemList).includes('unknown') && 'text-gray-400/70'}`}>
              {Object.values(itemList)}
            </span>
          </h5>
        )
      })}

    </div>
  )
}



const CartTitle = ({ name }) => {



  return (
    <div className="h-[40%] flex items-center justify-center">
      <h3
        className={`t-shadow  font-bold uppercase text-rick_blue text-center
        ${name.length >= 25 ? 'text-xl' : 'text-3xl'}`}
      >
        {name}
      </h3>
    </div>
  )
}


const CardBadge = ({ status }) => {

  //Set the color of the badge text according to the current state
  //status = Alive -> green
  //status = Dead -> red
  //status = unknokwn -> gray
  const statusBadge = status === 'Alive' ?
    'text-green-500' :
    status === 'Dead' ?
      'text-red-500' :
      'text-gray-400/70 font-light lowercase'


  return (
    <div className={`${statusBadge} absolute right-4 top-1 text-lg font-black uppercase `}>
      {status}
    </div>
  )
}



const CardAvatar = ({ image, name }) => {

  return (
    <div className="avatar h-[55%] px-4 pt-4 flex items-center justify-center">
      <img src={image} alt={name} className={`w-5/6 rounded-full`} />
    </div>
  )
}



export default Card