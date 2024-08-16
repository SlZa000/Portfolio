import React from 'react';
import '../css/DocumentsStyle.css';
import image1 from '../../images/dataimg.png';
import image2 from '../../images/netsec.png';

export default function Documents() {
  return (
    <>
      <div className='Documents'>
        <h1 className='Documents'>Certyfikaty</h1>
        <div className='imageContainer'>
          <p>Certyfikat 98-364: MTA Database Fundamentals - Ten certyfikat potwierdza podstawową wiedzę i umiejętności związane z bazami danych, w tym z relacyjnymi bazami danych, takimi jak Microsoft SQL Server. Jest to kluczowe dla każdego programisty, który chce pracować z danymi. Program MTA stanowi odpowiedni punkt wejścia do przyszłej kariery w technologii. Jest to idealne dla osób, które dopiero zaczynają swoją karierę w IT. Aby zdać egzamin 98-364, musisz mieć podstawowe zrozumienie podstawowych koncepcji bazy danych, tworzenia obiektów bazy danych, manipulowania danymi, przechowywania danych i administrowania bazą danych. To pokazuje, że jesteś zdolny do zarządzania danymi na poziomie podstawowym. Egzamin składa się z 45-50 pytań, a na jego ukończenie masz 120 minut (2 godziny). To pokazuje twoją zdolność do radzenia sobie z presją czasu. Egzamin jest przeznaczony dla kandydatów, którzy chcą udowodnić wprowadzającą wiedzę na temat bazy danych. To pokazuje twoje zaangażowanie w naukę i rozwijanie swoich umiejętności. Wszystkie egzaminy związane z certyfikacjami Microsoft Technology Associate (MTA) zostaną wycofane 30 czerwca 2022 roku. To pokazuje twoje zaangażowanie w ciągłe uczenie się i dostosowywanie się do zmieniających się technologii.</p>
          <img src={image1} alt='Certyfikat 98-364: MTA Database fundamentals' />
        </div>
        <div className='imageContainer'>
          <p>Certiport Network Security - Posiadacze tego certyfikatu wykazują podstawową wiedzę i umiejętności z zakresu bezpieczeństwa, w tym zrozumienie podstawowych zasad bezpieczeństwa, bezpieczeństwa systemu operacyjnego, bezpieczeństwa sieci i urządzeń oraz bezpiecznych praktyk informatycznych. Bezpieczeństwo jest kluczowe dla każdego programisty, a ten certyfikat pokazuje twoje zaangażowanie w ochronę danych. Program IT Specialist jest skierowany do kandydatów, którzy rozważają lub dopiero zaczynają karierę w technologii informacyjnej. To pokazuje twoje zaangażowanie w rozwijanie swojej kariery. Kandydaci mogą potwierdzić swoją wiedzę na szeroki zakres tematów IT, w tym rozwój oprogramowania, administracja bazami danych, sieci i bezpieczeństwo, mobilność i zarządzanie urządzeniami oraz kodowanie. To pokazuje twoją wszechstronność jako programista.</p>
          <img src={image2} alt='Certyfikat Certiport Network Security' />
        </div>
      </div>
    </>
  );
}
