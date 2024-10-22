import WorkExperience from '../components/cards/WorkExperience';
import './WorkSection.css'

const WorkSection = () => {
  return (
    <div className="work-section"> 
         <p >Experiência</p>

         <div className='grid-word'>

         <WorkExperience img={'src/assets/zoe-express.svg'}
        ptext={'Zoé Express'}
        stext={'Soluções personalizadas para entregas rápidas e confiáveis.'}
        />
   <WorkExperience img={'src/assets/zoe-express.svg'}
        ptext={'Zoé Express'}
        stext={'Soluções personalizadas para entregas rápidas e confiáveis.'}
        />
   <WorkExperience img={'src/assets/zoe-express.svg'}
        ptext={'Zoé Express'}
        stext={'Soluções personalizadas para entregas rápidas e confiáveis.'}
        />
   <WorkExperience img={'src/assets/zoe-express.svg'}
        ptext={'Zoé Express'}
        stext={'Soluções personalizadas para entregas rápidas e confiáveis.'}
        />
         </div>
    </div>
  );
};

export default WorkSection;
