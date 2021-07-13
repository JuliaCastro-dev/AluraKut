import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet  } from '../src/lib/AluraKutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades){
console.log(propriedades);
  return(
  <Box>
   <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
 </Box>
  )
}

export default function Home() {
  const User = 'JuliaCastro-dev';
  const PessoasFavoritas =[
    'peas',
    'micaellimedeiros',
    'JulianePires',
    'rafaballerini']
  return ( 
    <> { /* fragments, comose fosse um div invisivel*/}
    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea"  style={{gridArea:'profileArea'}}>
      <ProfileSidebar githubUser={User}/>
      </div>
     <div className="welcomeArea"  style={{gridArea:'welcomeArea'}}>
     <Box >
       <h1 className="title"> Bem vindo(a) pessoa amável da internet</h1> 
       <OrkutNostalgicIconSet/>
      </Box>
     </div>
     <div className="profileRelationsArea"  style={{gridArea:'profileRelationsArea'}}>
     <Box >
        Comunidades
      </Box>
      <ProfileRelationsBoxWrapper >
      <h2 className="smallTitle">
              Pessoas da comunidade ({PessoasFavoritas.length})
            </h2>
      <ul>
              {PessoasFavoritas.map((pessoa) => {
                return (
                  <li>
                    <a href={`/users/${pessoa}`} key={pessoa}>
                      <img src={`https://github.com/${pessoa}.png`} />
                      <span>{pessoa}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
      </ProfileRelationsBoxWrapper>
     </div>
      
     
    </MainGrid>
    </>
  )
}
