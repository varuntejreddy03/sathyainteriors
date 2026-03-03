import React, { useState } from 'react'
import { X, Check, RotateCw } from 'lucide-react'

const projectsData = {
  'anoop': {
    title: 'Anoop and Family',
    folder: '/09112025 -CD-Anoop and family',
    images: ["0.jpg", "1.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "2.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "3.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]
  },
  'shubra': {
    title: 'Ms Shubra Project',
    folder: '/804 Ms Shubra final 2d drawing',
    images: ["0.jpg", "1.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "2.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "3.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]
  },
  'tanu': {
    title: 'Tanu Interior Designs',
    folder: '/Tanu Interior Designs (1)',
    images: ["0.jpg", "1.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "2.png", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "3.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "4.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg", "5.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg", "56.jpg", "57.jpg", "58.jpg", "59.jpg", "6.jpg", "60.jpg", "61.jpg", "62.jpg", "63.jpg", "64.jpg", "65.jpg", "66.jpg", "67.jpg", "68.jpg", "69.jpg", "7.jpg", "70.jpg", "71.jpg", "72.jpg", "73.jpg", "74.jpg", "75.jpg", "76.jpg", "77.jpg", "78.jpg", "79.jpg", "8.jpg", "80.jpg", "81.jpg", "82.jpg", "83.jpg", "84.jpg", "85.jpg", "86.jpg", "87.jpg", "88.jpg", "89.jpg", "9.jpg", "90.jpg", "91.jpg", "92.jpg"]
  }
}

const ImageCurator = () => {
  const [selectedProject, setSelectedProject] = useState('anoop')
  const [removed, setRemoved] = useState({})
  const [rotations, setRotations] = useState({})

  const project = projectsData[selectedProject]
  const activeImages = project.images.filter(img => !removed[`${selectedProject}-${img}`])

  const toggleRemove = (img) => {
    const key = `${selectedProject}-${img}`
    setRemoved(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const rotateImage = (img) => {
    const key = `${selectedProject}-${img}`
    setRotations(prev => ({ ...prev, [key]: ((prev[key] || 0) + 90) % 360 }))
  }

  const exportCode = () => {
    const result = {}
    const rotationData = {}
    Object.keys(projectsData).forEach(projId => {
      result[projId] = projectsData[projId].images.filter(
        img => !removed[`${projId}-${img}`]
      )
      rotationData[projId] = {}
      result[projId].forEach(img => {
        const key = `${projId}-${img}`
        if (rotations[key]) rotationData[projId][img] = rotations[key]
      })
    })
    console.log('=== FILTERED IMAGES ===')
    console.log(JSON.stringify(result, null, 2))
    console.log('\n=== ROTATION DATA ===')
    console.log(JSON.stringify(rotationData, null, 2))
    alert('Check console for filtered images and rotation data')
  }

  return (
    <div style={{ padding: '100px 20px 40px', background: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1>Image Curator - Review & Remove Bad Images</h1>
        
        <div style={{ margin: '20px 0', display: 'flex', gap: '10px' }}>
          {Object.keys(projectsData).map(id => (
            <button
              key={id}
              onClick={() => setSelectedProject(id)}
              style={{
                padding: '10px 20px',
                background: selectedProject === id ? 'var(--primary)' : '#fff',
                color: selectedProject === id ? '#fff' : '#000',
                border: '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {projectsData[id].title} ({activeImages.length}/{project.images.length})
            </button>
          ))}
          <button onClick={exportCode} style={{ padding: '10px 20px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: 'auto' }}>
            Export Filtered List
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {project.images.map(img => {
            const key = `${selectedProject}-${img}`
            const isRemoved = removed[key]
            const rotation = rotations[key] || 0
            return (
              <div key={img} style={{ position: 'relative', background: '#fff', borderRadius: '8px', overflow: 'hidden', border: isRemoved ? '3px solid red' : '3px solid transparent' }}>
                <div style={{ width: '100%', height: '250px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={`${project.folder}/${img}`} alt={img} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', opacity: isRemoved ? 0.3 : 1, transform: `rotate(${rotation}deg)`, transition: 'transform 0.3s ease' }} />
                </div>
                <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>{img}</span>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button
                      onClick={() => rotateImage(img)}
                      style={{
                        padding: '8px',
                        background: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      title="Rotate 90°"
                    >
                      <RotateCw size={16} />
                    </button>
                    <button
                      onClick={() => toggleRemove(img)}
                      style={{
                        padding: '8px 12px',
                        background: isRemoved ? '#28a745' : '#dc3545',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      {isRemoved ? <><Check size={16} /> Keep</> : <><X size={16} /> Remove</>}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ImageCurator
