import { useState, useEffect } from "react";

import './style.css';


const Card = ({ results }) => {


  return (
    <>
      {results &&
        (
          results.map((character, index) => {

            //Destructuring character variable
            const { name, gender, species, status, origin, location, image } = character;




            //to maintain consistency between the cards change the style of the longer strings
            const _origin = origin.name
              .replace('Earth (Replacement Dimension)', 'Earth (Repl. Dim.)')
              .replace(`Earth (Evil Rick's Target Dimension)`, `Earth (Evil Rick's Dim.)`)
              .replace('Earth (Giant Telepathic Spiders Dimension)', 'Earth (Telepathic Spiders)')
              .replace('Rick and Two Crows Planet', 'Rick & Two Crows Planet');

            const _location = location.name
              .replace('Earth (Replacement Dimension)', 'Earth (Repl. Dim.)')
              .replace(`Earth (Evil Rick's Target Dimension)`, `Earth (Evil Rick's Dim.)`)
              .replace('Testicle Monster Dimension', 'Testicle Monster Dim.')
              .replace('Galactic Federation Prison', 'Galactic Fed. Prison')
              .replace('Interdimensional Customs', 'Interdim. Customs')
              .replace('Earth (Giant Telepathic Spiders Dimension)', 'Earth (Telepathic Spiders)')
              .replace('Rick and Two Crows Planet', 'Rick & Two Crows Planet');

            const shortName = name.length >= 20 && 'text-xxl';

            //CARD COMPONENT
            return (
              <div key={index} className="card flex flex-col text-gray-300">
                <div className="avatar h-[55%] ">
                  <img src={image} alt={name} className='h-full w-full rounded-tl-[10px] rounded-tr-[10px]' />
                </div>
                <div className="card-body h-[45%]">
                  <div className="card-title h-[40%] flex items-center justify-center">
                    <h3 className={`text-3xl uppercase font-magra text-rick_blue text-center ${shortName}`}>
                      {name}
                    </h3>
                  </div>
                  <div className="card-description h-[60%] px-2 flex flex-col justify-start text-lg">
                    <h5>
                      Gender: <span>{gender}</span>
                    </h5>
                    <h5>
                      Species: <span>{species}</span>
                    </h5>
                    <h5>
                      Origin: <span>{_origin}</span>
                    </h5>
                    <h5>
                      Location: <span>{_location}</span>
                    </h5>
                  </div>
                </div>
              </div>
            )
          })
        )
      }
    </>
  )
}









export default Card