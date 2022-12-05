import React from 'react'
import styles from './Sobre.module.css'
import foto_perfil from './foto.jpg'

export default function Sobre() {
  return (
    <>
      <h2 className={styles.sobre_h2}>Sobre</h2>
      <div className={styles.container}>
        <div className={styles.container__child}>
          <img src={foto_perfil} alt='foto'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus ex, venenatis hendrerit augue id, imperdiet scelerisque sem. Aenean auctor vehicula sapien ac tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ullamcorper metus et pretium consequat. Quisque vehicula viverra diam, ac vehicula nunc dapibus nec. Integer eget vulputate eros. Morbi nec blandit quam, at ultricies est. In gravida metus sem, quis vehicula est dictum vitae. Nunc quam sem, dictum cursus vehicula a, rhoncus nec nunc. Morbi ac turpis a purus pellentesque auctor. Sed velit felis, dictum sed tincidunt in, accumsan ac risus. Aenean in lacus vel ipsum condimentum facilisis non ut diam.
          Cras ac eleifend lorem, sed vestibulum sapien. Proin id porttitor dui. Fusce non mauris vitae nunc eleifend pellentesque. Etiam sit amet sagittis mauris. Nulla elementum maximus felis, ac egestas turpis sollicitudin ac. Sed facilisis blandit elit, nec lacinia mauris pellentesque a. In hac habitasse platea dictumst. Sed vestibulum lacus a porta sollicitudin. Suspendisse auctor fermentum libero. Vestibulum euismod dapibus pulvinar. Nam pretium lectus ex, in consequat velit facilisis non. Vivamus facilisis diam efficitur dui varius posuere. Aenean aliquet lacus neque, quis semper ipsum imperdiet sit amet. Mauris vel erat ante. In sagittis ipsum eu tellus pharetra malesuada. Pellentesque ac leo feugiat, eleifend felis gravida, malesuada orci.</p>
        </div>
    </div>
    </>
  )
}
