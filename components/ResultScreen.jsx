const ResultScreen = ({response, handleReset}) => {
const s = {
  responseTitleStyle: 'font-bold mb-1',
  responseSectionStyle: 'bg-white shadow-md rounded-md p-4 my-4',
  responseDataStyle: 'text-blue-500 ml-2',
  linkStyle: 'text-indigo-500 hover:text-indigo-600 transition-colors duration-300 ml-2',
};
  return <>
          <div className={s.responseSectionStyle}>
            <span className={s.responseTitleStyle}>Most relevant NOCs: </span>
            {response.occupationCodes.map((prof, i) => {
              return (
                <span key={i} className={s.responseDataStyle}>
                  {' '}
                  {prof.nocCode} - {prof.name}{' '}
                </span>
              );
            })}
          </div>

          {response.certifiedSkills.length > 0 && (
            <div className={s.responseSectionStyle}>
              <h3 className={s.responseTitleStyle}>
                Skills to certify:
              </h3>
              {response.certifiedSkills.map((skill, i) => {
                return (
                  <div key={i}>
                    <span title={skill.description}>{skill.name}:</span>
                    {skill.links.map((link, i) => {
                      return (
                        <a
                          className={s.linkStyle}
                          key={i}
                          target='_blank'
                          rel='noreferrer'
                          href={link.link}
                        >
                          {link.name}
                        </a>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
          <div className='flex flex-row flex-wrap items-start justify-start gap-4 '>
            <div className={s.responseSectionStyle}>
              <span className={s.responseTitleStyle}>Recommended skills:</span>
              <ul>
                {response.generalSkills.map((skill, i) => (
                  <li key={i} className={s.responseDataStyle}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className={s.responseSectionStyle}>
              <h3 className={s.responseTitleStyle}>Salary rates:</h3>
              <ul>
                <li className={s.responseTitleStyle}>
                  min: {response.salary[3]} {response.salary[0]}
                </li>
                <li className={s.responseTitleStyle}>
                  average: {response.salary[3]} {response.salary[1]}
                </li>
                <li className={s.responseTitleStyle}>
                  max: {response.salary[3]} {response.salary[2]}
                </li>
              </ul>
            </div>
          </div>

          <div className={s.responseSectionStyle}>
            <h3 className={s.responseTitleStyle}>Recommended courses</h3>
            {response.courses.map((course, i) => {
              return (
                <div key={i}>
                  <span title={course.description}>{course.name}:</span>
                  {course.links.map((link, i) => {
                    return (
                      <a
                        className={s.linkStyle}
                        key={i}
                        target='_blank'
                        rel='noreferrer'
                        href={link.link}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <button onClick={handleReset} className={s.btnStyle}>
            Reset
          </button>
        </>
}

export default ResultScreen;
