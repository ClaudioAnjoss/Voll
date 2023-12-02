import styled from 'styled-components'

export default function Depoimentos() {
  const ContainerDepoimentos = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px auto;
    padding: 16px;

    box-sizing: border-box;

    h1 {
      font-size: 24px;
      color: rgba(11, 59, 96, 1);
    }
  `
  const Depoimento = styled.div`
    font-size: 16px;
    max-width: 788px;
    text-align: justify;
    margin: 16px 0;

    color: rgba(144, 152, 159, 1);

    span {
      display: block;
      text-align: center;
      font-weight: 700;
      border-bottom: 1px solid rgba(231, 235, 239, 1);
    }
  `

  return (
    <ContainerDepoimentos>
      <h1>Depoimentos</h1>
      <Depoimento>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio.
        </p>
        <span>Júlio, 40 anos, São Paulo/SP.</span>
      </Depoimento>
      <Depoimento>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio.
        </p>
        <span>Júlio, 40 anos, São Paulo/SP.</span>
      </Depoimento>
      <Depoimento>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio.
        </p>
        <span>Júlio, 40 anos, São Paulo/SP.</span>
      </Depoimento>
      <Depoimento>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio.
        </p>
        <span>Júlio, 40 anos, São Paulo/SP.</span>
      </Depoimento>
    </ContainerDepoimentos>
  )
}
